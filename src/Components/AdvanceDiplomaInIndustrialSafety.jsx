// AdvanceDiplomaInIndustrialSafety.jsx
import React from "react";
import industrialSafetyImage from "../assets/fire6.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AdvanceDiplomaInIndustrialSafety = () => {
  return (
    <>
      <Header />
      <div className="mx-auto p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Advanced Diploma in Industrial Safety
        </h2>
        <img
          src={industrialSafetyImage}
          alt="Industrial Safety Course"
          className="w-full h-96 object-cover mb-4 rounded-md shadow-lg"
        />
        <p className="text-gray-100 mb-4">
          Specialize in industrial safety with our Advanced Diploma program.
          This course delves into industrial risk assessment, safety
          regulations, and emergency preparedness. Become a sought-after
          professional in industrial safety and risk management.
        </p>
        <div className="mb-4">
          <p className="text-gray-100 font-semibold">Course Highlights:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Duration: 1 year</li>
            <li>Qualification: B.Sc/Diploma</li>
            <li>Career Pathways: Industrial Safety Specialist, Risk Manager</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-100 font-semibold">Additional Details:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Advanced industrial risk assessment</li>
            <li>Compliance with industrial safety standards</li>
            <li>Emergency response planning for industrial settings</li>
            <li>Regulatory framework in industrial safety</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdvanceDiplomaInIndustrialSafety;
