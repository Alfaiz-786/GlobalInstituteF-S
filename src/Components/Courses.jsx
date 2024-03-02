import React from "react";
import { Link } from "react-router-dom";
import fire5 from "../assets/fire5.png";
import fire4 from "../assets/fire4.png";
import fire7 from "../assets/fire7.png";
import fire6 from "../assets/fire6.png";

const CourseCard = ({ title, description, duration, level, image, id }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md duration-300 transform border-2 transition-colors hover:border-red-600 hover:shadow-lg">
      <div className="relative h-64  mb-4 overflow-hidden rounded-md transition">
        <img
          src={image}
          alt={`Course Image - ${title}`}
          className="w-full h-full object-cover rounded-md transition duration-300 transform hover:scale-105"
        />
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold  h-16 lg:h-10 overflow-hidden">
        {title}
      </h3>
      <p className="text-gray-700  h-16 lg:h-10 overflow-hidden">
        {description}
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p className="text-sm md:text-base lg:text-sm text-gray-500">
            Duration: {duration}
          </p>
          <p className="text-sm md:text-base lg:text-sm text-gray-500">
            Level: {level}
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <Link to="/contactus">
            <button className="btn-enquiry bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-600">
              Enquiry
            </button>
          </Link>
          <Link to={`/courses/${id}`}>
            <button className="btn-learn-more bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-600">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Certificate in Firemen",
      description: "Basic course for aspiring firefighters.",
      duration: "6 months",
      level: "Beginner",
      image: fire5, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Diploma In Fire & Safety Management",
      description: "In-depth program covering fire and safety protocols.",
      duration: "12 months",
      level: "Intermediate",
      image: fire4, // Replace with actual image URL
    },
    {
      id: 3,
      title: "PG Diploma In Fire & Safety Management",
      description: "Advanced program with a focus on safety management.",
      duration: "12 months",
      level: "Advanced",
      image: fire7, // Replace with actual image URL
    },
    {
      id: 4,
      title: "Advanced Diploma In Industrial Safety",
      description: "Specialized course for industrial safety professionals.",
      duration: "12 months",
      level: "Advanced",
      image: fire6, // Replace with actual image URL
    },
    // Add more courses as needed
  ];

  return (
    <div className="mt-12 mx-4">
      <h2 className="text-3xl font-bold mb-8 text-center underline">
        Our Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
