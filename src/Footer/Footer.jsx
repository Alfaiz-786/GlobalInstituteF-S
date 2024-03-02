import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative mt-12">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
        style={{
          backgroundImage: `url('src/assets/footer.png')`, // Replace with the actual path or URL to your background image
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container flex flex-col lg:flex-row   relative z-10">
        <div className="text-center lg:text-left">
          <img
            src={logo} // Replace with the actual path to your logo image
            alt="Global Institute Logo"
            className="h-48 mx-auto"
          />
          <p className="text-lg text-white mt-4">
            Your Premier Choice for Fire and Safety Education
          </p>
          <p className="text-sm text-white mt-4">
            We are committed to providing high-quality education and training in
            the field of fire safety. Join us on the path to excellence!
          </p>
        </div>

        <div className="flex">
          {/* Quick Links Section */}
          <div className="flex ">
            <div className="space-y-2 mx-12 ">
              <h4 className="text-lg font-semibold text-white ">Quick Links</h4>
              <a href="#" className="text-gray-400 hover:text-white block">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                Courses
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                Contact
              </a>
            </div>

            {/* Connect with Us Section */}
            <div className="space-y-2 mx-12">
              <h4 className="text-lg font-semibold text-white">
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
          <div>
            <p className="mt-4 text-white">
              For inquiries, call us at:{" "}
              <span className="font-semibold">+1-123-456-7890</span>
            </p>
            <p className="text-white">
              Address:{" "}
              <span className="font-semibold">
                123 Fire Safety St, Cityville
              </span>
            </p>
            <p className="text-white">
              Email:{" "}
              <span className="font-semibold">info@globalinstitute.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-8 text-sm text-white text-center">
        <p>&copy; 2024 Global Institute. All rights reserved.</p>
        <p>Designed with ❤️ by Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
