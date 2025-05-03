import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  display: flex;
  justify-content: center;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.body || '#f9f9f9'};
`;

export const FormCard = styled.form`
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  input,
  textarea {
    padding: 12px 14px;
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
