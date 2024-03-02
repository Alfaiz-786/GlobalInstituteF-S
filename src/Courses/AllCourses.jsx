import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import CourseCard from "../Components/CourseCard";
import Footer from "../Footer/Footer";

const AllCourses = ({ courses }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-12 bg-gradient-to-b from-red-900 to-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-white mb-8 relative">
          All Courses
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-red-600"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllCourses;
