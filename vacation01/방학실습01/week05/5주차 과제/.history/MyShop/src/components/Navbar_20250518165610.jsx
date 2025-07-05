import { Link } from "react-router-dom";
import FrameCart from "../assets/Frame-cart.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-5 border-gray-200 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div>
        <Link to="/" className="font-semibold text-2xl">
          profile
        </Link>
        <Link to >
          <img src={FrameCart} alt="cart" className="w-6 h-6" />
        </Link>
        <Link>hamburger</Link>
        <Link></Link>
      </div>
    </nav>
  );
};

export default Navbar;
