import React, { useState } from "react";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.svg";

// import menu icon
// import { AiFillCloseCircle, AiFillMobile } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="flex items-center gap-6">
            <Link className="hover:text-violet-900 transition" to="/login">
              Log in
            </Link>
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </header> */}
      <nav className="p-6 mb-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <span className="text-white text-xl font-bold">Logo</span> */}
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center">
                <li className="ml-6 ">
                  <Link
                    to="/login"
                    className="hover:text-violet-900 transition"
                  >
                    Login
                  </Link>
                </li>
                <li className="ml-6">
                  <Link
                    to="/register"
                    className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="outline-none mobile-menu-button"
              >
                {isOpen ? (
                  <FaTimes className="text-slate-800 text-2xl" />
                ) : (
                  <FaBars className="text-slate-800 text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden mobile-menu mt-8`}
          >
            <ul className="flex items-center justify-center flex-col gap-y-6">
              <li onClick={toggleMenu}>
                <Link to="/login" className="hover:text-violet-900 transition">
                  Login
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  to="/register"
                  className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
