import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUsers } from "./UserContext";

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled.div`
  background: #3b809a;
  color: white;
  padding: 56px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: center;
  width:150px;
  height: 280px;
  &:hover {
    transform: translateY(-5px);
    background: #4fa1bc;
  }
`;

 const ProfileImage = styled.img`
    width: 50px;
    height: 30px;
 `
const AddUserButton = styled.button`
background: #4fa1bc;
color: #fff;
border: none;
border-radius: 8px;
padding: 12px 28px;
font-size: 1.1rem;
font-weight: bold;
cursor: pointer;
margin-bottom: 12px;
margin-right: 50px;
margin-top: 30px;
transition: background 0.2s;
box-shadow: 0 2px 8px rgba(0,0,0,0.10);

&:hover {
  background: #3b809a;
}
`;

const TopBar = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
margin-bottom: 8px;
padding: 0 20px;
`;

const UserList = () => {
  const navigate = useNavigate();
  const { users } = useUsers();

  return (
    <>
      <TopBar>
        <AddUserButton onClick={() => navigate('/UserRegistration')}>
          + 유저 등록
        </AddUserButton>
      </TopBar>
    <ProfileContainer>
      {users.map(users => (
        <ProfileCard key={users.id} onClick={() => navigate(`/UserDetail/${users.id}`)}>
          <ProfileImage
          src={users.img}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px"
          }}
          />
          <h3>{users.name}</h3>
          <p>아이디: {users.id}</p>
          <p>나이: {users.age}</p>
          <p style={{ color: users.isOnline ? "lightgreen" : "red" }}>
            {users.isOnline ? "온라인" : "오프라인"}
          </p>
        </ProfileCard>
      ))}
    </ProfileContainer>
    </>
  );
};

export default UserList;
