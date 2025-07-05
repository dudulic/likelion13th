import { Link } from 'react-router-dom';
import instaLogo from '../../assets/instagram.svg'

export const Sidebar = () => (
  <aside className="absolute top-0 left-0 w-[73px] h-screen z-10 bg-[#D9D9D9] flex flex-col items-center pt-[37px]">
     <Link to="/">
    <img src={instaLogo} alt="Instagram Logo" className='w-8 h-8'/>
    </Link>
  </aside>
);