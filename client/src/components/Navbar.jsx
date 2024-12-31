import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { bg, toggleTheme, textColor, token, isLoggedIn } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <nav style={{ backgroundColor: bg }} className="bg-gray-800 text-black">
      <div style={{ color: textColor }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold" style={{ color: textColor }}>
              LOGO
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/latest-info"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                style={{ color: textColor }}
              >
                Latest Info
              </Link>
              <Link
                to="/"
                className={`text-${textColor} hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                style={{ color: textColor }}
              >
                About
              </Link>
              {!isLoggedIn ? (
                <>
                  
                  <Link
                    to="/register"
                    className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: textColor }}
                  >
                    Register
                  </Link>
                
                  <Link
                to="/login"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                style={{ color: textColor }}
              >
                Login
              </Link>


                </>
              

              ): <>
              <Link
                    to="/list"
                    className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: textColor }}
                  >
                    List
                  </Link>

                  <Link
                to="/logout"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                style={{ color: textColor }}
              >
                Logout
              </Link>
              </>
              }
              
              
              <button
                className="border-2 border-blue-400 rounded-lg p-2 text-white hover:text-black"
                onClick={toggleTheme}
                style={{ color: textColor }}
              >
                Change Theme
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            {!isTokenAvailable && (
              <>
                <Link
                  to="/list"
                  className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  List
                </Link>
                <Link
                  to="/register"
                  className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </Link>
              </>
            )}
            <Link
              to="/login"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
