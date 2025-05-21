// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   return (
//     <nav className="fixed top-0 border-dotted border-b-5 border-gray-800 left-0 right-0 h-20 bg-sky-200 text-black flex items-center justify-between px-10 z-50">
//       <div className="space-x-10 flex items-center">
//         <Link to="/" className="font-semibold text-2xl">
//           Playlist 🎧
//         </Link>
//         <Link to="/top100">Top 100</Link>
//         <Link to="/mypage">My Page</Link>
//       </div>
//       <Link to="/login">Login</Link>
//     </nav>
//   );
// };

import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="ph:hidden dt:flex fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white items-center justify-between px-10 z-50">
        <div className="space-x-10 flex items-center">
          <Link to="/" className="font-semibold text-2xl">
            Playlist 🎧
          </Link>
          <Link to="/top100">Top 100</Link>
          <Link to="/mypage">My Page</Link>
        </div>
        <Link to="/login">Login</Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className="dt:hidden ph:flex fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white items-center justify-between px-6 z-50">
        <Link to="/" className="font-semibold text-2xl">
          Playlist 🎧
        </Link>
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {/* 햄버거 아이콘 그리기, 그냥 svg import해서 써도 돼요! */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`dt:hidden ph: fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-100 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="flex flex-col items-center pt-24 space-y-6">
          <Link to="/top100" className="text-white">
            Top 100
          </Link>
          <Link to="/mypage" className="text-white">
            My Page
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
