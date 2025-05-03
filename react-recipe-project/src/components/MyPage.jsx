import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUserStore from '../UserStore';
import {
  PageWrapper,
  ProfileCard,
  Title,
  InfoList,
  InfoItem,
  ButtonGroup,
  SubmitButton,
  DeleteButton,
  HomeButton,
  Overlay,
  Modal,
} from '../style/MyPageStyle';

const MyPage = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useUserStore();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const [form, setForm] = useState({
    name: user?.name || '',
    userid: user?.userid || '',
    email: user?.email || '',
    age: user?.age || '',
    favorite: user?.favorite || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:3001/users/${user.id}`, form);
      toast.success('회원 정보가 수정되었습니다!');
      updateUser(res.data);
    } catch (err) {
      toast.error('수정 실패');
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (confirmPassword !== user.password) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/users/${user.id}`);
      alert('회원 탈퇴가 완료되었습니다.');
      updateUser(null);
      window.location.href = '/';
    } catch (err) {
      toast.error('탈퇴 실패');
      console.error(err);
    }
  };

  return (
    <PageWrapper>
      <HomeButton onClick={() => navigate('/')}>🏠 홈으로</HomeButton>

      <ProfileCard>
        <Title>👤 {user?.name}님의 마이페이지</Title>
        <InfoList>
          <InfoItem>
            <label>이름</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </InfoItem>
          <InfoItem>
            <label>아이디</label>
            <input name="userid" value={form.userid} disabled />
          </InfoItem>
          <InfoItem>
            <label>이메일</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </InfoItem>
          <InfoItem>
            <label>나이</label>
            <input name="age" value={form.age} onChange={handleChange} type="number" />
          </InfoItem>
          <InfoItem>
            <label>최애 카테고리</label>
            <input name="favorite" value={form.favorite} onChange={handleChange} />
          </InfoItem>
        </InfoList>

        <ButtonGroup>
          <SubmitButton onClick={handleUpdate}>💾 정보 수정</SubmitButton>
          <DeleteButton onClick={() => setShowDeleteConfirm(true)}>🗑️ 회원 탈퇴</DeleteButton>
        </ButtonGroup>
      </ProfileCard>

      {showDeleteConfirm && (
        <Overlay>
          <Modal>
            <h3>비밀번호 확인</h3>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="buttons">
              <button onClick={handleDelete}>탈퇴</button>
              <button onClick={() => setShowDeleteConfirm(false)}>취소</button>
            </div>
          </Modal>
        </Overlay>
      )}
    </PageWrapper>
  );
};

export default MyPage;
