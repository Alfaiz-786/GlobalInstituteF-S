import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AboutInstitute = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(8deg, #F3F4F6 25%, transparent 25%, transparent 75%, #F3F4F6 75%, #F3F4F6), linear-gradient(-45deg, #F3F4F6 25%, transparent 25%, transparent 75%, #F3F4F6 75%, #F3F4F6)`,
        backgroundSize: "1000px",
      }}
    >
      <div className="  bg-opacity-90 rounded-md p-8 shadow-md  relative z-10 text-gray-800">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Global Institute of Fire and Safety Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Placeholder Image (Replace with your actual image) */}
          <img
            src={logo}
            alt="Institute Facilities"
            className="w-full h-78 object-cover rounded-md shadow-md mb-6"
          />
          <div className="md:col-span-2 lg:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed">
              Welcome to the Global Institute of Fire and Safety Management! We
              are committed to providing top-notch education and training in the
              field of fire safety. Our experienced instructors and
              comprehensive courses ensure that our students are well-prepared
              for a successful career in fire safety and management.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-4">
              Our institute is equipped with state-of-the-art facilities and
              resources to facilitate effective learning. Whether you are a
              beginner looking to start your journey in fire safety or an
              experienced professional seeking advanced training, we have
              programs tailored to meet your needs.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/aboutus">
            <button className="bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-indigo-600">
              Learn More
            </button>
          </Link>
          <Link to="/courses">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-600">
              View Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
