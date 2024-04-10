import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logodark from "../../assets/logo-white.png";
import logo from "../../assets/logo-black.png";
import { Menu } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline"; // Import the hamburger and close icons

function Navbar() {
  function OffCanvasNav({ onClose }) {
    return (
      <div className="fixed inset-0 bg-white z-100 p-4">
        <div className="flex flex-col space-y-4">
          {/* Close icon */}
          <div className="flex justify-between mb-8">
            <img src={logo} alt="" srcset="" className=" w-72" />
            <button onClick={onClose}>
              <XIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          {/* All links */}
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5 "
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5 "
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/about-us"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5  "
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5  "
            onClick={onClose}
          >
            Blogs
          </Link>
          <Link
            to="/cityhotels"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5  "
            onClick={onClose}
          >
            Pet Hotels
          </Link>
          <Link
            to="/cityngo"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5  "
            onClick={onClose}
          >
            NGO's
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-gray-900 text-sm border-b-2 pb-5  "
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }

  const [isTop, setIsTop] = useState(true);
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  const [isTablet, setIsTablet] = useState(false); // State to determine tablet screen size

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100);
    };

    const handleResize = () => {
      setIsTablet(window.innerWidth >= 200 && window.innerWidth <= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleHover = (hovering) => {
    setShowMenu(hovering);
  };

  return (
    <nav
      className={`fixed top-0 w-full py-4 z-50 ${
        isTop ? "bg-transparent text-white" : "bg-white text-black shadow-lg"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center ">
          <img src={isTop ? logodark : logo} alt="Logo" className="h-20 w-20 mr-2" />
        </Link>

        {isTablet ? (
          // Off-canvas menu for tablets
          <div
            className="block lg:hidden z-50"
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
          >
            <Menu as="div" className="relative">
              <Menu.Button
                className="nav-link d-flex justify-between"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <MenuAlt2Icon className="h-6 w-6 text-gray-500" />
              </Menu.Button>
              {showMenu && <OffCanvasNav onClose={() => setShowMenu(false)} />}
            </Menu>
          </div>
        ) : (
          // Regular navbar for desktops
          <div className="hidden lg:flex space-x-8 items-center z-50">
            {/* <Menu as="div" className="relative">
              <Menu.Button
                className="nav-link d-flex justify-between"
                onClick={() => setShowMenu(!showMenu)}
                onMouseEnter={toggleMenu}
             
              >
                <Link to="/services">
                Services
                </Link>
              </Menu.Button>
              {showMenu && (
                <div  onMouseLeave={toggleMenu} 
                 className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 rounded-md shadow-lg bg-white z-50 w-full sm:w-[600px] grid grid-cols-2 gap-x-4 gap-y-2">
                  {navListMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center p-2 text-sm text-gray-800 rounded-md transition duration-150 ease-in-out"
                    >
                      <div className="flex-shrink-0 mr-2">{item.icon}</div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Menu> */}
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/services" className="nav-link">
              Servivces
            </Link>
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
            <Link to="/cityhotels" className="nav-link">
            Pet Hotels
            </Link>
            <Link to="/cityngo" className="nav-link">
            NGO's
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
