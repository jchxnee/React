import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FormWrapper, Form, FormField, SubmitButton, ErrorText } from '../style/MemberEnrollStyle';

const schema = yup.object().shape({
  userid: yup.string().required('아이디를 입력해주세요'),
  password: yup.string().min(8, '비밀번호는 8자리 이상이어야합니다').required('비밀번호를 입력해주세요'),
  name: yup.string().required('이름을 입력해주세요'),
  email: yup
    .string()
    .email('이메일 형식에 맞지 않습니다')
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      '이메일을 정확히 입력해 주세요.'
    )
    .required('이메일을 입력해주세요'),
  age: yup.number().typeError('숫자만 입력해주세요').required('나이를 입력해주세요'),
  phone: yup
    .string()
    .matches(/^\d{11}$/, '전화번호 형식에 맞지 않습니다. -없이 11자리로 입력해주세요')
    .required('전화번호를 입력해주세요'),
});

const MemberEnroll = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3001/users', data);
      toast.success('회원가입이 완료되었습니다!');
      navigate('/LoginForm');
    } catch (err) {
      console.error(err);
      toast.error('회원가입 중 오류가 발생했습니다. 다시 시도해주세요');
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>👤 회원가입</h2>
        <FormField>
          <label>아이디</label>
          <input type="text" placeholder="아이디를 입력하세요" {...register('userid')} />
          {errors.userid && <ErrorText>{errors.userid.message}</ErrorText>}
        </FormField>
        <FormField>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력하세요" {...register('password')} />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </FormField>
        <FormField>
          <label>이름</label>
          <input type="text" placeholder="이름을 입력하세요" {...register('name')} />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </FormField>
        <FormField>
          <label>전화번호</label>
          <input type="phone" placeholder="전화번호를 입력하세요(-없이)" {...register('phone')} />
          {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
        </FormField>
        <FormField>
          <label>이메일</label>
          <input type="email" placeholder="이메일을 입력하세요" {...register('email')} />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormField>
        <FormField>
          <label>나이</label>
          <input type="number" placeholder="나이를 입력하세요" {...register('age')} />
          {errors.age && <ErrorText>{errors.age.message}</ErrorText>}
        </FormField>
        <FormField>
          <label>최애 카테고리</label>
          <input type="favorite" placeholder="양식,중식,한식 등" {...register('favorite')} />
          {errors.age && <ErrorText>{errors.age.message}</ErrorText>}
        </FormField>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default MemberEnroll;
