import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return (
      <nav className="bg-orange-300 w-28 flex flex-col items-center justify-center">
        <ul className="space-y-4 text-center">
            <li>
            <Link to="hero" title="Hero" className="block p-5 rounded hover:bg-orange-200 hover:scale-125 text-white text-2xl transition duration-450 ease-in-out"><FaHome/></Link>
            </li>
            <li>
            <Link to="about" title="About" className="block p-5 rounded hover:bg-orange-200 hover:scale-125 text-white text-2xl transition duration-450 ease-in-out"><FaUser/></Link>
            </li>
            <li>
            <Link to="projects" title="Projects" className="block p-5 rounded hover:bg-orange-200 hover:scale-125 text-white text-2xl transition duration-450 ease-in-out"><FaFolderOpen/></Link>
            </li>
            <li>
            <Link to="contact" title="Contact" className="block p-5 rounded hover:bg-orange-200 hover:scale-125 text-white text-2xl transition duration-450 ease-in-out"><FaEnvelope/></Link>
            </li>
        </ul>
      </nav>  
    );
};

export default Navbar;