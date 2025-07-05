import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/layouts/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Feed/>} />
          <Route path='/profile/:name' element={<Profile/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
