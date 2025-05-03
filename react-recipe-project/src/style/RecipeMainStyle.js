import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AddFood = styled.div`
  button {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    border: none;
    padding: 8px 14px;
    font-size: 0.9rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 20px;

    &:hover {
      background-color: ${({ theme }) => theme.primaryHover || '#0053ba'};
    }
  }
`;

export const MemberButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const WelcomeText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.95rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 8px 12px;
    font-size: 0.85rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: white;
      border-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const FoodList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FoodCard = styled.li`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0.5, 0.5, 0.5, 0.5);
  overflow: hidden;
  transition: transform 0.3s;
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

export const FoodTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px;
  text-align: center;
`;

export const FoodIngredients = styled.p`
  font-size: 0.9em;
  margin: 10px;
`;
