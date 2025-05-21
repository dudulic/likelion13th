import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-background-image.png bg-origin-border text-white min-h-screen">
        <Outlet />
      </div>
    </>
  );
};
