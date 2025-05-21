import { Link } from "react-router-dom";
import FrameCart from "../assets/FrameCart.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 border-b-5 border-gray-200 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl">
          profile
        </Link>
        <Link>cart</Link>
        <Link>hamburger</Link>
        <Link></Link>
      </div>
    </nav>
  );
};

export default Navbar;
