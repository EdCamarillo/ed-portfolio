import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#56C596] w-28 flex flex-col items-center justify-center">
      <ul className="space-y-4 text-center">
        <li>
          <NavLink
            to="hero"
            title="Hero"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            title="About"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaUser />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            title="Projects"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaFolderOpen />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            title="Contact"
            className={({ isActive }) =>
              `block p-5 rounded-lg text-white text-2xl transition duration-300 ease-in-out ${
                isActive ? "bg-[#7CD6B0] hover:scale-125" : "hover:bg-[#7CD6B0] hover:scale-125"
              }`
            }
          >
            <FaEnvelope />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
