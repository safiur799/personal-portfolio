import { useState } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-[#170550] p-4 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <a className="text-white font-bold text-xl">Safiur Rahaman</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              className="text-white hover:text-gray-300 cursor-pointer"
              href="#about"
            >
              HOME
            </a>
            <a
              className="text-white hover:text-gray-300 cursor-pointer"
              href="#des"
            >
              ABOUT
            </a>

            <a
              className="text-white hover:text-gray-300 cursor-pointer"
              href="#skills"
            >
              SKILLS
            </a>
            <a
              className="text-white hover:text-gray-300 cursor-pointer"
              href="#projects"
            >
              PROJECTS
            </a>

            <a
              className="text-white hover:text-gray-300 cursor-pointer"
              href="#contact"
            >
              CONTACT
            </a>

            {/* Add more links as needed */}
          </div>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <img src="/Hamburger_cross.svg" />
              ) : (
                <img src="/Cross.svg" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Responsive menu for mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="babsolute top-16 left-0 right-0 bg-gray-800 text-white p-4 transition-all duration-300 ease-in-out z-50 text-center">
            <a className="block text-white py-2" href="#about">
              HOME
            </a>

            <a className="block text-white py-2" href="#des">
              ABOUT
            </a>
            <a className="block text-white py-2" href="#skills">
              SKILLS
            </a>

            <a className="block text-white py-2" href="#projects">
              PROJECTS
            </a>
            <a className="block text-white py-2" href="#contact">
              CONTACT
            </a>

            {/* Add more links as needed */}
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
