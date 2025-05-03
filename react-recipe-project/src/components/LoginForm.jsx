import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useUserStore from '../UserStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HomeButton, ErrorText, SubmitButton, FormField, LoginCard, PageWrapper } from '../style/LoginFormStyle';

const LoginForm = () => {
  const { login } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.userid || !data.password) {
      toast.error('아이디와 비밀번호를 입력해주세요.', { toastId: 'null-error' });
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3001/users?userid=${data.userid}`);
      const user = res.data.find((u) => u.password === data.password);

      if (!user) {
        toast.error('아이디 또는 비밀번호가 올바르지 않습니다.', { toastId: 'not-correct' });
      } else {
        login(user);
        toast.success('로그인 성공!', { toastId: 'login-success' });
        navigate('/');
      }
    } catch (err) {
      console.error('로그인 오류:', err);
      toast.error('로그인 오류 발생');
    }
  };

  return (
    <PageWrapper>
      <LoginCard onSubmit={handleSubmit(onSubmit)}>
        <HomeButton type="button" onClick={() => navigate('/')}>
          🏠 홈으로
        </HomeButton>
        <h2>🔐 로그인</h2>

        <FormField>
          <label>아이디</label>
          <input type="text" placeholder="아이디를 입력하세요" {...register('userid')} />
          {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
        </FormField>

        <FormField>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력하세요" {...register('password')} />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </FormField>

        <SubmitButton type="submit">로그인</SubmitButton>
      </LoginCard>
    </PageWrapper>
  );
};

export default LoginForm;
