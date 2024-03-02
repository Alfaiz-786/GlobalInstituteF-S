import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative mt-12">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
        style={{
          backgroundImage: `url(${footer})`, // Replace with the actual path or URL to your background image
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container flex flex-col lg:flex-row relative z-10">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <img
            src={logo} // Replace with the actual path to your logo image
            alt="Global Institute Logo"
            className="h-12 mx-auto lg:h-48"
          />
          <p className="text-base lg:text-lg mt-4">
            Your Premier Choice for Fire and Safety Education
          </p>
          <p className="text-sm text-white mt-4 lg:text-base">
            We are committed to providing high-quality education and training in
            the field of fire safety. Join us on the path to excellence!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          {/* Quick Links Section */}
          <div className="flex flex-col lg:flex-row w-full lg:w-1/2">
            <div className="space-y-2 mx-4 lg:mx-12">
              <h4 className="text-lg font-semibold text-white mb-2 lg:mb-4">
                Quick Links
              </h4>
              <Link to="/" className="text-gray-400 hover:text-white block">
                Home
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-400 hover:text-white block"
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className="text-gray-400 hover:text-white block"
              >
                Courses
              </Link>
              <Link
                to="/contactus"
                className="text-gray-400 hover:text-white block"
              >
                Contact
              </Link>
            </div>

            {/* Connect with Us Section */}
            <div className="space-y-2 mx-4 lg:mx-12">
              <h4 className="text-lg font-semibold text-white mb-2 lg:mb-4">
                Connect with Us
              </h4>
              <a href="#" className="text-gray-400 hover:text-white block">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                Instagram
              </a>
            </div>
          </div>

          <div className="mt-4 lg:mt-0">
            <p className="text-white mb-2">
              For inquiries, call us at:{" "}
              <span className="font-semibold">+91 9545569943</span>
            </p>
            <p className="text-white mb-2">
              Or , Whatsapp us at:{" "}
              <span className="font-semibold">+91 8956338808</span>
            </p>
            <p className="text-white mb-2">
              Address:{" "}
              <span className="font-semibold">
                Office no-2 1st floor, stand view CHS behind ST Depot panvel
              </span>
            </p>
            <p className="text-white mb-2">
              Email:{" "}
              <span className="font-semibold">info@globalinstitute.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-8 text-xs lg:text-sm text-white text-center">
        <p>&copy; 2024 Global Institute. All rights reserved.</p>
        <p>Designed with ❤️ by Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
