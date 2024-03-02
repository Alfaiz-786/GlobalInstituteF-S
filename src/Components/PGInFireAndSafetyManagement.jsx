// PGInFireAndSafetyManagement.jsx
import React from "react";
import pgImage from "../assets/fire7.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PGInFireAndSafetyManagement = () => {
  return (
    <>
      <Header />
      <div className="mx-auto p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-white">
          PG in Fire and Safety Management
        </h2>
        <img
          src={pgImage}
          alt="PG in Fire and Safety Management"
          className="w-full h-96 object-cover mb-4 rounded-md shadow-lg"
        />
        <p className="text-gray-100 mb-4">
          Elevate your expertise with our PG in Fire and Safety Management. This
          postgraduate diploma focuses on advanced safety strategies, risk
          assessment, and leadership in safety management. Prepare for
          leadership roles in the field of fire safety.
        </p>
        <div className="mb-4">
          <p className="text-gray-100 font-semibold">Course Highlights:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Duration: 1 year</li>
            <li>Qualification: Graduate/Diploma</li>
            <li>Career Pathways: Safety Manager, Safety Consultant</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-100 font-semibold">Additional Details:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Leadership and management in safety</li>
            <li>Advanced risk assessment techniques</li>
            <li>Emergency response planning at a managerial level</li>
            <li>Strategic safety program development</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PGInFireAndSafetyManagement;
