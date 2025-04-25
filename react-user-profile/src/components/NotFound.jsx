import React from 'react';
import styled from 'styled-components';

const NotFound = () => {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;             
  height: 100vh;            
  text-align: center;
  background: linear-gradient(135deg, #4fa1bc 0%, #3b809a 100%);
  padding: 20px;
`;

const Image = styled.img`
  width: 90%;             
  max-width: 1000px;       
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: black;
`;

const Message = styled.p`
  font-size: 1.3rem;
  color: #000000;
`;

  return (
    <Container>
      <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjBfNTgg%2FMDAxNjQyNjQ0ODE4MDMx.EA4BiIo9QUmPkFee9VPnweo-npl9qHxGSEmgDZBQRs8g.yrVbUJIFuJ0egHVRgnvGvAU2-pnIExhMznpyxZl1Oi8g.JPEG.hkh4262%2F18.JPG&type=sc960_832" alt="404 Not Found" />
      <Title>페이지를 찾을 수 없습니다</Title>
      <Message>요청하신 페이지가 존재하지 않거나 이동되었어요.</Message>
    </Container>
  );
};

export default NotFound;
