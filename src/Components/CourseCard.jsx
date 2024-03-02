import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ title, description, duration, level, image, id }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md mb-8">
      <img
        src={image}
        alt={title}
        className="w-full  h-96 object-cover rounded-md mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Level:</span> {level}
        </p>
      </div>
      <div>
        <Link to={`/courses/${id}`}>
          <button className="btn-enquiry bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-600 mr-4">
            Know More
          </button>
        </Link>
        <Link to="/contactus">
          <button className="btn-learn-more bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-600">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
