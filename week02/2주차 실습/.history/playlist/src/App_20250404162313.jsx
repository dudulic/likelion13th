import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Playlist } from './pages/Playlist';
import { Top100 } from './pages/Top100';
import { MyPage } from './pages/MyPage';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Playlist />} />
        <Route path="/top100" element={<Top100 />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;