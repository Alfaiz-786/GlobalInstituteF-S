// Navbar.js

import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa"; // Import the FontAwesome icons
import { Image } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-600 shadow-xl  mt-8 sticky top-0 z-50">
      {/* Red color for fire */}
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="text-white font-bold text-2xl md:text-lg md:mb-0">
          <Link to="/">
            <img
              className=" w-20 flex justify-center"
              src="/src/assets/logo.png"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none md:hidden"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto transition duration-300`}
        >
          <Link
            to="/"
            className="text-white hover:text-gray-200 md:mr-4 my-2 transition duration-300"
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              to="/Courses"
              className="text-white hover:text-gray-200 md:mr-4 my-2 transition duration-300"
            >
              Courses <FaAngleDown className="inline-block ml-1" />
            </Link>
            {/* Dropdown content */}
            <div className="absolute hidden  mt-2 space-y-2 bg-white text-gray-800 group-hover:block z-10 rounded-md shadow-lg">
              <Link
                to="/courses/1"
                className="block px-4 py-2 hover:text-red-600 transition duration-300"
              >
                Certificate in Firemen
              </Link>
              <Link
                to="/courses/2"
                className="block px-4 py-2 hover:text-red-600 transition duration-300"
              >
                Diploma In Fire & Safety Management
              </Link>
              <Link
                to="/courses/3"
                className="block px-4 py-2 hover:text-red-600 transition duration-300"
              >
                PG Diploma In Fire & Safety Management
              </Link>
              <Link
                to="/courses/4"
                className="block px-4 py-2 hover:text-red-600 transition duration-300"
              >
                Advanced Diploma In Industrial Safety
              </Link>
              {/* Add more courses as needed */}
            </div>
          </div>
          <div className="md:flex-col">
            <Link
              to="/AboutUs"
              className="text-white hover:text-gray-200 md:mr-4  my-2 transition duration-300"
            >
              About Us
            </Link>
          </div>
          <div className="md:flex-col">
            <Link
              to="/ContactUs"
              className="text-white hover:text-gray-200  my-2 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
