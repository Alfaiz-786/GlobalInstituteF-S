// AboutUs.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from "../assets/logo.png";
import image1 from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-red-900 to-gray-800">
        <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center text-black mb-8 relative">
            About Global Institute{" "}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-red-600"></span>
          </h2>

          <div className="flex items-center justify-center mb-8">
            <img
              src={logo} // Replace with the actual path to your logo image
              alt="Global Institute Logo"
              className="h-16 w-16 mr-4"
            />
            <div>
              <p className="text-lg text-gray-700">
                Global Institute has been recognized as the{" "}
                <strong>
                  Best Fire and Safety Institute in Navi Mumbai for 2023/24
                </strong>{" "}
                and awarded for being the{" "}
                <strong>
                  Best Fire Safety Courses Provider Institute in Panvel for
                  2021/22
                </strong>
                . These accolades showcase our commitment to excellence and
                dedication to providing top-notch education in the field of fire
                safety.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Welcome to Global Institute, your trusted partner in fire and safety
            education. We take pride in being a leader in the industry, offering
            a range of courses designed to equip individuals with the knowledge
            and skills needed for a successful career in fire safety.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Our institute is located in the vibrant city of Navi Mumbai, with a
            state-of-the-art campus and experienced instructors. We are
            dedicated to providing high-quality education that meets industry
            standards and prepares our students to face real-world challenges in
            the field of fire safety.
          </p>

          <div className="flex justify-around mb-8">
            <img
              src={image1} // Replace with the actual path to your image
              alt="About Us Image 1"
              className="rounded-md shadow-md mb-4 w-96 h-56"
            />
            <img
              src={image2} // Replace with the actual path to your image
              alt="About Us Image 2"
              className="rounded-md shadow-md w-96 h-56"
            />
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Why Choose Global Institute?
          </p>

          <ul className="list-disc pl-8 mb-4 text-lg text-gray-700">
            <li>
              Industry-Recognized Courses: Our courses are designed based on
              industry standards and are recognized for their relevance and
              effectiveness.
            </li>
            <li>
              Experienced Instructors: Learn from seasoned professionals with
              years of experience in the field of fire safety.
            </li>
            <li>
              State-of-the-Art Facilities: Our campus is equipped with modern
              facilities to provide a conducive learning environment.
            </li>
            <li>
              Placement Assistance: We assist our students in securing job
              placements through our network of industry connections.
            </li>
          </ul>

          <p className="text-lg text-gray-700 mb-4">
            Join us at Global Institute and embark on a journey towards a
            rewarding career in fire safety. Let us help you make a difference
            in ensuring the safety and well-being of communities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
