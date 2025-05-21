import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#F9F9F9]">
      <Sidebar />
      <div className="mx-auto w-[468px] bg-white min-h-screen flex flex-col justify-center items-center relative z-0">
        <Outlet />
      </div>
    </div>
  );
};