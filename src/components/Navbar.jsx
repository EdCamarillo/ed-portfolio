import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#56C596] w-28 flex flex-col items-center justify-center">
      <ul className="space-y-4 text-center">
        <li className="relative group">
          <NavLink
            to="hero"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaHome />
          </NavLink>
          <span className="absolute left-full ml-8 top-1/2 bg-black text-white text-sm px-3 py-2 rounded opacity-0 pointer-events-none transform transition-all duration-300 ease-in-out origin-left group-hover:opacity-100 group-hover:-translate-y-1/2">
            Hero
          </span>
        </li>
        <li className="relative group">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaUser />
          </NavLink>
          <span className="absolute left-full ml-8 top-1/2 bg-black text-white text-sm px-3 py-2 rounded opacity-0 pointer-events-none transform transition-all duration-300 ease-in-out origin-left group-hover:opacity-100 group-hover:-translate-y-1/2">
            About
          </span>
        </li>
        <li className="relative group">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaFolderOpen />
          </NavLink>
          <span className="absolute left-full ml-8 top-1/2 bg-black text-white text-sm px-3 py-2 rounded opacity-0 pointer-events-none transform transition-all duration-300 ease-in-out origin-left group-hover:opacity-100 group-hover:-translate-y-1/2">
            Projects
          </span>
        </li>
        <li className="relative group">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaEnvelope />
          </NavLink>
          <span className="absolute left-full ml-8 top-1/2 bg-black text-white text-sm px-3 py-2 rounded opacity-0 pointer-events-none transform transition-all duration-300 ease-in-out origin-left group-hover:opacity-100 group-hover:-translate-y-1/2">
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
