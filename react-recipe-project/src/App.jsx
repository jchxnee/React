import { useState } from 'react';

import './App.css';
import RecipeMain from './components/RecipeMain';
import GlobalStyle from '../GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import NotFound from './components/NotFound';
import AddRecipe from './components/AddRecipe';
import { ToastContainer } from 'react-toastify';
import LoginForm from './components/LoginForm';
import MemberEnroll from './components/MemberEnroll';
import MyPage from './components/MyPage';
import UpdateRecipe from './components/UpdateRecipe';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipeMain onToggleTheme={toggleTheme} />} />
            <Route path="/foods/:id" element={<RecipeDetail />} />
            <Route path="/AddRecipe" element={<AddRecipe />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/MemberEnroll" element={<MemberEnroll />} />
            <Route path="/UpdateRecipe/:id" element={<UpdateRecipe />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer position="top-center" autoClose={2000} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
