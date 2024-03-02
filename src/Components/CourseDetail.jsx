import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CourseDetail = ({ courses }) => {
  const { title } = useParams();
  const course = courses.find(
    (c) => c.title.toLowerCase() === title.toLowerCase()
  );

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-bold">{course.title}</h2>
          <Link to="/courses" className="text-blue-500 hover:underline">
            Back to Courses
          </Link>
        </div>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{course.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
          </div>
          <div className="text-right">
            <p>
              <strong>Enroll Now:</strong>{" "}
              <span className="text-green-500">Available</span>
            </p>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Enroll Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetail;
