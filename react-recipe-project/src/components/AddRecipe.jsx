import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserStore from '../UserStore';
import { PageWrapper, FormCard, FormField, SubmitButton } from '../style/AddRecipeStyle';
const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [recipe, setRecipe] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      ingredient: ingredient.split(',').map((i) => i.trim()),
      recipe: recipe.split('\n').map((step) => step.trim()),
      image,
      userId: user?.id,
    };

    try {
      await axios.post('http://localhost:3001/foods', newRecipe);
      toast.success('레시피가 등록되었습니다!');
      navigate('/');
    } catch (error) {
      toast.error('레시피 등록 실패');
      console.error(error);
    }
  };

  return (
    <PageWrapper>
      <FormCard onSubmit={handleSubmit}>
        <h2>🍽️ 새로운 레시피 등록</h2>

        <FormField>
          <label>음식 이름</label>
          <input
            type="text"
            placeholder="예) 크림파스타"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <label>재료 (쉼표로 구분)</label>
          <input
            type="text"
            placeholder="예) 파스타면, 우유, 치즈"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <label>레시피 단계 (줄마다 1단계)</label>
          <textarea
            placeholder={`예)\n1. 물을 끓인다\n2. 면을 삶는다\n3. 소스를 넣는다`}
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            required
            rows={6}
          />
        </FormField>

        <FormField>
          <label>이미지 URL</label>
          <input
            type="text"
            placeholder="예) https://example.com/image.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </FormField>

        <SubmitButton type="submit">레시피 등록</SubmitButton>
      </FormCard>
    </PageWrapper>
  );
};

export default AddRecipe;
