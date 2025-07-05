import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components&layout/Navbar';

	export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-black text-white min-h-screen">
        <Outlet />
      </div>
    </>
  );
};