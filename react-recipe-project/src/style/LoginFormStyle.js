import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.body || '#f9f9f9'};
`;

export const LoginCard = styled.form`
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 500px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const FormField = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: left;
    margin-left: 15px;
    margin-top: 15px;
  }

  input {
    padding: 12px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.border || '#ccc'};
    border-radius: 8px;
    background: ${({ theme }) => theme.inputBackground || '#fff'};
    color: ${({ theme }) => theme.text};
    transition: border 0.2s;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary || '#4caf50'};
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.primary || '#4caf50'};
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark || '#388e3c'};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
`;

export const HomeButton = styled.button`
  position: relative;
  top: 0px;
  left: 300px;
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
