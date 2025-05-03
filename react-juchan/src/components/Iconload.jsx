import React from 'react'
import { GiTigerHead } from "react-icons/gi";
import styled from 'styled-components';
import { FaCat } from "react-icons/fa6";
import { FaDog } from "react-icons/fa";

const Iconload = () => {
  return (
    <Wrapper>
        <Title>동물 버튼 만들기</Title>
        <Button color="black">호랑이<GiTigerHead/></Button> 
        <Button color="black">고양이<FaCat/></Button>
        <Button color="black">강아지<FaDog/></Button>   
    </Wrapper>
  )
}

export default Iconload;

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h2`
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 12px;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    background: ${({color}) => color || "#5d5dfa"};
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    transition: 0.2;
    margin-bottom: 10px;

    &:hover{
        opacity: 0.9;
        scale: 0.9;
    }
`