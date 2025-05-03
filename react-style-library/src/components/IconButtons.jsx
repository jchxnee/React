import React from 'react'
import styled from 'styled-components'
import { FaApple, FaEdit} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const IconButtons = () => {
  return (
    <Wrapper>
        <Title>
       <FaApple /> 아이콘 버튼 
        </Title>

        <Button color="orange">
        <FaEdit />
            수정
        </Button>

        <Button color="red">
        <MdDeleteForever />
            삭제
        </Button>

    </Wrapper>
  )
}

export default IconButtons

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

    &:hover{
        opacity: 0.9;
        scale: 0.9;
    }
`
