import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 border-dotted border-b-5 border-gray-400 left-0 right-0 h-20 bg-sky-200 text-black flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl">
          Playlist 🎧
        </Link>
        <Link to="/top100">Top 100</Link>
        <Link to="/mypage">My Page</Link>
      </div>
      <Link to="/login">Login</Link>
    </nav>
  );
};
