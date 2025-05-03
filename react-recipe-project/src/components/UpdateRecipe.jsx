import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SubmitButton, FormField, FormCard, PageWrapper } from '../style/UpdateRecipeStyle';

const UpdateRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [recipe, setRecipe] = useState('');
  const [image, setImage] = useState('');
  const [userid, setUserid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/foods/${id}`);
        const data = res.data;

        setTitle(data.title);
        setIngredient(data.ingredient.join(', '));
        setRecipe(data.recipe.join('\n'));
        setImage(data.image);
        setUserid(data.userid);
      } catch (error) {
        toast.error('레시피 정보를 불러오지 못했습니다');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRecipe = {
      title,
      ingredient: ingredient.split(',').map((i) => i.trim()),
      recipe: recipe.split('\n').map((step) => step.trim()),
      image,
      userid,
    };

    try {
      await axios.put(`http://localhost:3001/foods/${id}`, updatedRecipe);
      toast.success('레시피가 수정되었습니다!');
      navigate('/');
    } catch (error) {
      toast.error('레시피 수정 실패');
      console.error(error);
    }
  };

  if (loading) return <p>불러오는 중입니다...</p>;

  return (
    <PageWrapper>
      <FormCard onSubmit={handleSubmit}>
        <h2>🍽️ 레시피 수정</h2>

        <FormField>
          <label>음식 이름</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </FormField>

        <FormField>
          <label>재료 (쉼표로 구분)</label>
          <input type="text" value={ingredient} onChange={(e) => setIngredient(e.target.value)} required />
        </FormField>

        <FormField>
          <label>레시피 단계 (줄마다 한 단계)</label>
          <textarea value={recipe} onChange={(e) => setRecipe(e.target.value)} rows={6} required />
        </FormField>

        <FormField>
          <label>이미지 URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </FormField>

        <SubmitButton type="submit">레시피 수정</SubmitButton>
      </FormCard>
    </PageWrapper>
  );
};

export default UpdateRecipe;
