import React from 'react'
import { FaExchangeAlt } from "react-icons/fa";
import styled from 'styled-components';

const Themechange = ({onToggleTheme}) => {

  return (
    <Wrapper>
        <h2>테마 변경해보기</h2>
        <p>현재 테마에 따라 글자/배경색 바꿔보기</p>
        <ToggleButton onClick={onToggleTheme}>
            <FaExchangeAlt/>
        </ToggleButton>
    </Wrapper>
  )
}

export default Themechange;

const Wrapper = styled.div`
    padding: 40px;
    text-align: center;
`

const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    background: ${({theme}) => theme.primary};
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    transition: 0.2;

    &:hover{
        opacity: 0.9;
        scale: 0.9;
    }
`