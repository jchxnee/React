import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 24px;
    text-align: center;
    background: #7bc5e0;
`

const Title = styled.h1`
    color: black;    
    margin-bottom: 24px;
`

const Button = styled(Link)`
    display: inline-block;
    background: #7878cf;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    text-decoration: none;
    margin: 12px;

    &:hover{
        opacity: 0.8;
        color: white;
        scale: 0.9;
    }
`

const HomePage = () => {
  return (
    <HomeContainer>
        <Title>게시판 관리</Title>
        <Button to="/posts">게시글 목록</Button>
        <Button to="/posts/new">게시글 작성</Button>
    </HomeContainer>
  )
}

export default HomePage