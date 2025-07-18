import { axiosinstance } from './axios';

export const login = async (code) => {
  const res = await axiosinstance.post('/auth/kakao', {
    code,
  });
  return res.data;
};
// 백엔드에서 받아서 저장하기
