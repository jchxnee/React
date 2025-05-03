import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdFoodBank } from 'react-icons/md';
import useUserStore from '../UserStore';
import {
  FoodIngredients,
  FoodTitle,
  FoodImage,
  FoodCard,
  FoodList,
  ButtonGroup,
  WelcomeText,
  MemberButton,
  AddFood,
  ButtonContainer,
  ThemeToggleButton,
  Header,
  Container,
} from '../style/RecipeMainStyle';
const RecipeMain = ({ onToggleTheme }) => {
  const [foods, setFood] = useState([]);
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useUserStore();

  const getFood = async () => {
    const res = await axios.get('http://localhost:3001/foods');
    setFood(res.data);
  };

  useEffect(() => {
    getFood();
  }, []);

  const detailClick = (id) => {
    navigate(`/foods/${id}`);
  };

  const addClick = () => {
    navigate('/AddRecipe');
  };
  return (
    <Container>
      <Header>
        <ThemeToggleButton onClick={onToggleTheme}>
          <FaMoon />
        </ThemeToggleButton>
        <ButtonContainer>
          <AddFood>
            <button onClick={() => addClick()}>새로운 레시피 등록</button>
          </AddFood>
          <h2 style={{ marginRight: '90px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MdFoodBank size={50} />
            레시피 목록
          </h2>
          <MemberButton>
            {!isLoggedIn ? (
              <>
                <ButtonGroup>
                  <button onClick={() => navigate('/LoginForm')}>로그인</button>
                  <button onClick={() => navigate('/MemberEnroll')}>회원가입</button>
                </ButtonGroup>
              </>
            ) : (
              <>
                <WelcomeText>👋 {user.name}님 환영합니다!</WelcomeText>
                <ButtonGroup>
                  <button onClick={() => navigate('/MyPage')}>마이페이지</button>
                  <button onClick={logout}>로그아웃</button>
                </ButtonGroup>
              </>
            )}
          </MemberButton>
        </ButtonContainer>
      </Header>
      <FoodList>
        {foods.map((food) => (
          <FoodCard key={food.id} onClick={() => detailClick(food.id)}>
            <FoodImage src={food.image} alt={food.title} />
            <FoodTitle>{food.title}</FoodTitle>
            <FoodIngredients>
              <strong>재료:</strong> {food.ingredient.join(', ')}
            </FoodIngredients>
          </FoodCard>
        ))}
      </FoodList>
    </Container>
  );
};

export default RecipeMain;
