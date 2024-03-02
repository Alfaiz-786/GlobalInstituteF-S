import React from "react";
import classroom from "../assets/classroom.png";
import classs from "../assets/class.png";
import image from "../assets/image.jpg";

const ChooseUs = () => {
  return (
    <div
      className="mt-12  p-8 bg-gradient-to-r from-red-300 to-red-100 rounded-md shadow-md"
      style={
        {
          // backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-geometric.png")`, // Replace with your actual background pattern URL
        }
      }
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-black underline">
        Why Choose Global Institute of Fire and Safety Management?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        <div className="text-center p-6 bg-red-100 rounded-md shadow-md">
          <img
            src={classroom}
            alt="Institute Facilities"
            className="object-cover mb-4 mx-auto w-full"
          />
          <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
          <p className="text-gray-600">
            State-of-the-art facilities for hands-on, practical learning.
          </p>
        </div>
        <div className="text-center p-6 bg-red-100 rounded-md shadow-md">
          <img
            src={classs}
            alt="Experienced Instructors"
            className=" object-cover mb-4 mx-auto w-full"
          />
          <h3 className="text-xl font-bold mb-2">Experienced Instructors</h3>
          <p className="text-gray-600">
            Learn from industry experts with years of experience.
          </p>
        </div>
        <div className="text-center p-6 bg-red-100 rounded-md shadow-md">
          <img
            src={image}
            alt="Global Recognition"
            className="w-full  object-cover mb-4 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
          <p className="text-black">
            Our certifications are globally recognized and respected.
          </p>
        </div>
      </div>
      <div className="mt-8 text-xl text-red-500">
        <p className="text-black">
          At Global Institute of Fire and Safety Management, we offer much more
          than just education. Here's why students choose us:
        </p>
        <ul className="list-disc list-inside text-black mt-4 pl-4">
          <li>
            Comprehensive curriculum designed for real-world applications.
          </li>
          <li>Practical hands-on training for better understanding.</li>
          <li>Supportive and experienced instructors.</li>
          <li>Global recognition of certifications.</li>
          {/* Add more points as needed */}
        </ul>
        <p className="text-black mt-4">
          Join us on the journey to excellence in fire and safety education.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
