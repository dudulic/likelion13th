import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="fixed top-0 border-b-5 border-gray-200 left-0 right-0 h-20bg-black text-white flex items-center justify-between px-10 z-50">
      <div>
        <Link to="/" className='font-semibold'
      </div>
    </nav>
  );
};

export default Navbar;
