import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import back from "../assets/back.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mehraj Dalvi",
      course: "Fire Safety Management",
      content:
        "I had an excellent experience at Global Institute. The instructors are knowledgeable, and the practical training provided a solid foundation for my career in fire safety.",
    },
    {
      name: "Saqlain Pitthoo",
      course: "Industrial Safety",
      content:
        "Choosing Global Institute was the best decision for my career. The comprehensive courses and supportive staff helped me gain the skills needed to excel in industrial safety.",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [currentTestimonialIndex, testimonials]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div
      className="mt-12  relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${back})`, // Replace with your background image URL
        minHeight: "300px", // Set a minimum height for better responsiveness
      }}
    >
      <div className="bg-black bg-opacity-75 w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col p-4">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center underline">
          Student Testimonials
        </h2>
        <div className="text-white text-center p-4">
          <p className="text-base md:text-lg lg:text-xl mb-4">
            {currentTestimonial.content}
          </p>
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <img
                src={logo} // Replace with actual image URL
                alt={`Student - ${currentTestimonial.name}`}
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="text-base md:text-lg lg:text-xl font-bold">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-300">{currentTestimonial.course}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
