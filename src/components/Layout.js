import { useState } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [about, setAbout] = useState("");
  // const [home, setHome] = useState("home");
  // const [skill, setSkill] = useState("skill");
  // const [project, setProject] = useState("project");
  // const [contact, setContact] = useState("contact");

  return (
    // <div>
    //   <nav className="bg-[#170550] p-4 fixed top-0 w-full  overflow-hidden ">
    //     <div className="max-w-7xl mx-auto flex justify-between items-center ">
    //       <div>
    //         <a className="text-white font-bold text-xl">Safiur Rahaman</a>
    //       </div>
    //       <div className="hidden md:flex space-x-4">
    //         <a
    //           className="text-white hover:text-gray-300 cursor-pointer"
    //           href="#about"
    //         >
    //           HOME
    //         </a>
    //         <a
    //           className="text-white hover:text-gray-300 cursor-pointer"
    //           href="#des"
    //         >
    //           ABOUT
    //         </a>

    //         <a
    //           className="text-white hover:text-gray-300 cursor-pointer"
    //           href="#skills"
    //         >
    //           SKILLS
    //         </a>
    //         <a
    //           className="text-white hover:text-gray-300 cursor-pointer"
    //           href="#projects"
    //         >
    //           PROJECTS
    //         </a>

    //         <a
    //           className="text-white hover:text-gray-300 cursor-pointer"
    //           href="#contact"
    //         >
    //           CONTACT
    //         </a>

    //         {/* Add more links as needed */}
    //       </div>
    //       {/* Hamburger menu for mobile */}
    //       <div className="md:hidden">
    //         <button
    //           className="text-white focus:outline-none"
    //           onClick={toggleMenu}
    //         >
    //           {isMenuOpen ? (
    //             <img src="/Hamburger_cross.svg" />
    //           ) : (
    //             <img src="/Cross.svg" />
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    //   {/* Responsive menu for mobile */}
    //   {isMenuOpen && (
    //     <div className="md:hidden z-10">
    //       <div className="babsolute top-16 left-0 bg-red-500 right-0  text-white p-4 transition-all duration-300 ease-in-out z-50 text-center">
    //         <a className="block text-white py-2" href="#about">
    //           HOME
    //         </a>

    //         <a className="block text-white py-2" href="#des">
    //           ABOUT
    //         </a>
    //         <a className="block text-white py-2" href="#skills">
    //           SKILLS
    //         </a>

    //         <a className="block text-white py-2" href="#projects">
    //           PROJECTS
    //         </a>
    //         <a className="block text-white py-2" href="#contact">
    //           CONTACT
    //         </a>

    //         {/* Add more links as needed */}
    //       </div>
    //     </div>
    //   )}
    //   <div>{children}</div>
    // </div>
    <div>
      <nav className=" py-4 fixed  w-full z-10 bg-gray-800">
        <div className="container mx-auto px-4 flex items-center justify-between relative    ">
          <a className="text-white text-lg font-bold">Safiur Rahaman</a>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:border-none"
            >
              {isMenuOpen ? (
                <img src="/Hamburger_cross.svg" />
              ) : (
                <img src="/Cross.svg" />
              )}
            </button>
          </div>

          <div
            className={`lg:flex absolute top-full left-0 bg-gray-800 w-full lg:w-auto lg:relative lg:bg-transparent lg:top-auto lg:left-auto lg:flex-row lg:items-center transition-all duration-300 ease-in-out ${
              isMenuOpen ? "flex flex-col " : "hidden"
            }`}
          >
            <ul
              className={`lg:flex items-center lg:space-x-4 lg:flex-row lg:mt-0 lg:-top-4 ${
                isMenuOpen ? "space-y-2 pl-4 pt-2 " : ""
              }`}
            >
              <li>
                <a className="text-white  cursor-pointer"></a>
              </li>
              <li onClick={() => setAbout("about")}>
                <a
                  className={`  cursor-pointer hover:text-[#F86F03] ${
                    about == "about" ? "text-[#F86F03]" : "text-white"
                  }`}
                  href="#about"
                >
                  HOME
                </a>
              </li>
              <li onClick={() => setAbout("des")}>
                <a
                  className={` hover:text-[#F86F03] cursor-pointer ${
                    about === "des" ? "text-[#F86F03]" : "text-white"
                  }`}
                  href="#des"
                >
                  ABOUT
                </a>
              </li>
              <li onClick={() => setAbout("skills")}>
                <a
                  className={` hover:text-[#F86F03] cursor-pointer ${
                    about === "skills" ? "text-[#F86F03]" : "text-white"
                  }`}
                  href="#skills"
                  onClick={() => setAbout("skill")}
                >
                  SKILLS
                </a>
              </li>
              <li onClick={() => setAbout("projects")}>
                <a
                  className={` hover:text-[#F86F03] cursor-pointer ${
                    about === "projects" ? "text-[#F86F03]" : "text-white"
                  }`}
                  href="#projects"
                  onClick={() => setAbout("project")}
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  className={` hover:text-[#F86F03] py-2 ${
                    about === "contact" ? "text-[#F86F03]" : "text-white"
                  } `}
                  href="#contact"
                  onClick={() => setAbout("contact")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className=" pt-16 bg-[#31065A]">{children}</div>
    </div>
  );
};

export default Layout;
