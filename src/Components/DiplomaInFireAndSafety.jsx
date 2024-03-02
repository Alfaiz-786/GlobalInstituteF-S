// DiplomaInFireAndSafety.jsx
import React from "react";
import safetyImage from "../assets/fire4.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DiplomaInFireAndSafety = () => {
  return (
    <>
      <Header />
      <div className="mx-auto p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Diploma in Fire and Safety
        </h2>
        <img
          src={safetyImage}
          alt="Fire and Safety Course"
          className="w-full h-96 object-cover mb-4 rounded-md shadow-lg"
        />
        <p className="text-gray-100 mb-4">
          Explore the comprehensive world of fire and safety with our Diploma in
          Fire and Safety program. This diploma equips you with advanced
          knowledge in fire prevention, safety management, and emergency
          response. Be ready for a rewarding career in safety management.
        </p>
        <div className="mb-4">
          <p className="text-gray-100 font-semibold">Course Highlights:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Duration: 1 year</li>
            <li>Qualification: 10th/12th Pass</li>
            <li>Career Pathways: Safety Officer, Safety Inspector</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-100 font-semibold">Additional Details:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Advanced fire safety protocols</li>
            <li>Risk assessment and hazard identification</li>
            <li>Occupational safety and health practices</li>
            <li>Legislation and compliance in safety</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiplomaInFireAndSafety;
