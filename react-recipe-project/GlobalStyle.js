// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.text}
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
