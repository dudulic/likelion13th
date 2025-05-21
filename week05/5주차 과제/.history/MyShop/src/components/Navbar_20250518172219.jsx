import { Link } from "react-router-dom";
import FrameCart from "../assets/FrameCart.svg";
import FrameProfile from "../assets/FrameProfile.svg";
import FrameHamburger from "../assets/FrameHamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {/* Desktop Navigation */}
      <nav className="fixed top-0 border-b-5 border-gray-200 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
        <div className="space-x-10 flex items-center">
          <Link to="/profile" className="font-semibold text-2xl">
            <img src={FrameProfile} alt="profile" className="w-6 h-6" />
          </Link>
          <Link to="/cart">
            <img src={FrameCart} alt="cart" className="w-6 h-6" />
          </Link>
          <Link>hamburger</Link>
          <Link></Link>
        </div>
      </nav>

    {/* Mobile Navigation */}
    </>
  );
};

export default Navbar;
