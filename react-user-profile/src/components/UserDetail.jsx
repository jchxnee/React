import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "./UserContext";
import styled from "styled-components";


const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #4fa1bc 0%, #3b809a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 48px 40px 32px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  position: relative;
`;


const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #4fa1bc;
  margin-bottom: 24px;
  background: #eee;
`;


const Name = styled.h3`
  margin: 0 0 10px 0;
  font-size: 2.2rem;
  color: #222;
`;


const Info = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin: 10px 0;
  strong {
    color: #3b809a;
  }
`;


const Status = styled.p`
  padding: 5px 16px;
  border-radius: 20px;
  background: ${({ online }) => (online ? "#e6fbee" : "#ffeaea")};
  color: ${({ online }) => (online ? "#1fa67a" : "#d9534f")};
  font-weight: bold;
  margin-top: 10px;
  font-size: 1rem;
`;


const BackButton = styled.button`
  margin-top: 32px;
  padding: 12px 32px;
  background: #4fa1bc;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #3b809a;
  }
`;

const DeleteButton = styled.button`
  margin-top: 16px;
  padding: 12px 32px;
  background: #d9534f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c9302c;
  }
`;



const UserDetail = () => {
  const { users, deleteUser } = useUsers();
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = users.find(u => String(u.id) === String(userId));

  if (!user) {
    return (
      <Wrapper>
        <Card>
          <Name>사용자를 찾을 수 없습니다</Name>
          <BackButton onClick={() => navigate("/")}>목록으로</BackButton>
        </Card>
      </Wrapper>
    );
  }

  const handleDelete = () => {
    if (window.confirm(`${user.name}님을 삭제할까요?`)) {
      deleteUser(user.id);
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <Card>
        <Avatar src={user.img || "https://via.placeholder.com/120"} alt={`${user.name} 프로필`} />
        <Name>{user.name}님의 프로필</Name>
        <Info><strong>ID:</strong> {user.id}</Info>
        <Info><strong>나이:</strong> {user.age}</Info>
        <Status online={user.isOnline}>{user.isOnline ? "온라인" : "오프라인"}</Status>
        <BackButton onClick={() => navigate("/")}>목록으로</BackButton>
        <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
      </Card>
    </Wrapper>
  );
};

export default UserDetail;
