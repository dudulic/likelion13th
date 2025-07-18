import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (!code) {
      alert('인가코드없음');
      navigate('/login');
      return;
    }

    const kakaoLogin = async () => {
      try {
        const { accessToken, refreshToken } = await login(code);
        setTokens(accessToken, refreshToken);
        navigate('/');
      } catch (err) {
        alert('로그인 실패');
        navigate('/login');
      }
    };

    kakaoLogin();

    console.log('카카오 인가코드:', code);
  }, [location.search, navigate]);

  return <>로딩중..</>;
};

export default KakaoRedirectPage;
