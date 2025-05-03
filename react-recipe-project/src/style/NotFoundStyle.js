import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #7fbed4 0%, #61afcb 100%);
  box-shadow: 0px 4px 8px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 90%;
  max-width: 1000px;
  height: 80%;
  margin-bottom: 20px;
  border: 1px solid black;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const Message = styled.p`
  font-size: 1.3rem;
  color: #000000;
`;

export const HomeButton = styled.button`
  position: relative;
  top: 50px;
  left: 430px;
  padding: 10px 16px;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.03);
  }
`;
