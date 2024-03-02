// CertificateInFiremen.jsx
import React from "react";
import firemenImage from "../assets/fire5.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CertificateInFiremen = () => {
  return (
    <>
      <Header />
      <div className="mx-auto p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Certificate in Firemen
        </h2>
        <img
          src={firemenImage}
          alt="Firemen Course"
          className="w-full h-96 object-cover mb-4 rounded-md shadow-lg"
        />
        <p className="text-gray-100 mb-4">
          Dive into the world of firefighting with our Certificate in Firemen
          course. This program provides hands-on training in fire response,
          rescue techniques, and basic first aid. Gain the skills needed to
          become a confident and effective firefighter.
        </p>
        <div className="mb-4">
          <p className="text-gray-100 font-semibold">Course Highlights:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Duration: 6 months</li>
            <li>Qualification: 10th Pass</li>
            <li>Career Pathways: Firefighter, Emergency Responder</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-100 font-semibold">Additional Details:</p>
          <ul className="list-disc pl-6 text-gray-100">
            <li>Basic firefighting techniques</li>
            <li>Emergency response and rescue training</li>
            <li>First aid and CPR certification</li>
            <li>Practical simulations and drills</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CertificateInFiremen;
