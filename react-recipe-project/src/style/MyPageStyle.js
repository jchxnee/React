import styled from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: ${({ theme }) => theme.text};
`;

export const ProfileCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.primary};
  margin-top: 30px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const InfoItem = styled.li`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.primary};
  }

  input {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.border || '#ccc'};
    background-color: ${({ theme }) => theme.inputBackground || '#fff'};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
  }

  input:disabled {
    background-color: #f0f0f0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover || '#2b7cb0'};
  }
`;

export const DeleteButton = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

export const HomeButton = styled.button`
  position: absolute;
  top: 50px;
  right: 30px;
  padding: 10px 14px;
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

// =========== 모달 ===========

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Modal = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 12px;
  width: 300px;
  text-align: center;

  h3 {
    margin-bottom: 16px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
  }

  .buttons {
    display: flex;
    gap: 10px;

    button {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }

    button:first-child {
      background-color: #e74c3c;
      color: white;
    }

    button:last-child {
      background-color: #ccc;
      color: black;
    }
  }
`;
