import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUserStore from '../UserStore';
import {
  StyledHashLoader,
  BackLink,
  RecipeStep,
  RecipeStepList,
  FoodImage,
  DetailContainer,
  RightSection,
  LeftSection,
  ContentWrapper,
  EditButton,
  ButtonGroup,
  DeleteButton,
} from '../style/RecipeDetailStyle';

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUserStore();
  const theme = useTheme();

  console.log('현재 테마:', theme);
  console.log('현재 테마:', JSON.stringify(theme, null, 2));
  console.log('스피너 테마 : ', theme.spinnerColor);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/foods/${id}`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFood(res.data);
      } catch (err) {
        console.error('에러 발생:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/foods/${food.id}`);
      toast.success('레시피가 삭제되었습니다!');
      navigate('/');
    } catch (error) {
      toast.error('삭제 실패 😢');
      console.error(error);
    }
  };

  if (loading) {
    return (
      <DetailContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px' }}>
        <StyledHashLoader />
        <p>⏳ 불러오는 중입니다...</p>
      </DetailContainer>
    );
  }

  if (!food) return <p>로딩 중...</p>;

  return (
    <DetailContainer>
      <BackLink to="/">← 목록으로</BackLink>
      <ContentWrapper>
        <LeftSection>
          <FoodImage src={food.image} alt={food.title} />
          <h2>{food.title}</h2>
        </LeftSection>
        <RightSection>
          <h4>재료: {food.ingredient.join(', ')}</h4>
          <h2>🍳 만드는 방법</h2>
          <RecipeStepList>
            {food.recipe.map((step, index) => (
              <RecipeStep key={index}>
                <strong>Step</strong> {step}
              </RecipeStep>
            ))}
          </RecipeStepList>
        </RightSection>
        {user && user.userid === food.userid && (
          <ButtonGroup>
            <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
            <EditButton to={`/UpdateRecipe/${food.id}`}>수정</EditButton>
          </ButtonGroup>
        )}
      </ContentWrapper>
    </DetailContainer>
  );
};

export default RecipeDetail;
