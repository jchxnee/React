import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Image, Title, Message, HomeButton } from '../style/NotFoundStyle';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <HomeButton onClick={() => navigate('/')}>🏠 홈으로</HomeButton>
      <Image
        src="https://comodosslstore.com/blog/wp-content/uploads/2024/01/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg"
        alt="404 Not Found"
        onClick={() => {
          handleClick();
        }}
      />
      <Title>페이지를 찾을 수 없습니다</Title>
      <Message>요청하신 페이지가 존재하지 않거나 이동되었어요.</Message>
    </Container>
  );
};

export default NotFound;
