import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { MyPage } from './pages/MyPage';
import { NotFound } from './pages/NotFound';

import { Layout } from './components/layout/Layout';
import KakaoRedirectPage from './pages/KakaoRedirect';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/auth/callback" element={<KakaoRedirectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
