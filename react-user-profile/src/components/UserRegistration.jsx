// AddUser.js
import React, { useState } from "react";
import { useUsers } from "./UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4fa1bc 0%, #3b809a 100%);
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1px;
  color: black;
`;

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #bbb;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 12px 0;
  background: #4fa1bc;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 12px;
`;

const UserRegistration = () => {
  const { addUser } = useUsers();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    id: "",
    age: "",
    isOnline: false,
    img: ""
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value
    }));
  };  

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.id || !form.age) {
      alert("이름, 아이디, 나이를 모두 입력하세요.");
      return;
    }
    addUser({
      ...form,
      age: Number(form.age)
    });
    navigate("/");
  };

  return (
    <Wrapper>
    <Form onSubmit={handleSubmit}>
      <Label>이름</Label>
      <Input name="name" value={form.name} onChange={handleChange} required />

      <Label>아이디</Label>
      <Input name="id" value={form.id} onChange={handleChange} required />

      <Label>나이</Label>
      <Input name="age" type="number" value={form.age} onChange={handleChange} required />

      <Label>프로필 이미지 URL</Label>
      <Input name="img" value={form.img} onChange={handleChange} placeholder="이미지 주소(선택)" />

      <Label>
        <Input
          type="checkbox"
          name="isOnline"
          checked={form.isOnline}
          onChange={handleChange}
        />
        온라인 상태
      </Label>

      <Button type="submit">등록하기</Button>
    </Form>
    </Wrapper>
  );
};

export default UserRegistration;
