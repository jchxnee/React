import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

export const DeleteButton = styled.button`
  background: #db4479;
  margin-left: -100px;
  &:hover {
    opacity: 0.8;
    scale: 1.1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const EditButton = styled(Link)`
  background: #4caf50;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    scale: 1.1;
  }
`;

export const ContentWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: flex-start;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    margin-top: 20px;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  flex: 1.5;

  h4 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  color: ${({ theme }) => theme.text};
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

export const RecipeStepList = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 20px;
`;

export const RecipeStep = styled.li`
  background: ${({ theme }) => theme.stepBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 16px;
  margin-bottom: 12px;
  border-left: 4px solid ${({ theme }) => theme.primary};
  border-radius: 6px;
  font-size: 0.95rem;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.border};
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  margin-bottom: 20px;

  &:hover {
    text-decoration: none;
    scale: 1.3;
  }
`;

export const StyledHashLoader = styled(HashLoader)`
  & svg {
    color: ${({ theme }) => theme.spinnerColor}; // svg 내부의 색상 적용
  }
  margin-top: -130px;
  margin-bottom: 30px;
`;
