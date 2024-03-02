// ContactUs.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-red-900 to-gray-800">
        <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center text-black mb-8 relative">
            Contact Us{" "}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-red-600"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Get in Touch (Khopoli)
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Have questions or need assistance? Reach out to us! Our
                dedicated team is ready to help you.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> +91 9545569943
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>WhatsApp:</strong> +91 8956338808
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Address:</strong> Near Khopoli Railway Station Ashiyana
                building office no. 8 Bazerpeth Khopoli, Beside Ratndeep hotel
              </p>
            </div>
            <div>
              {/* Updated Google Map Embed with the Khopoli location */}
              <iframe
                title="Global Institute Khopoli Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0771417909654!2d73.06875791489098!3d19.0724600570768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d09921dfb01f%3A0x6c21d1b8d215b2e5!2sYour%20Institute%20Name%20Khopoli!5e0!3m2!1sen!2sin!4v1678253945580!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Get in Touch (Panvel)
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Have questions or need assistance? Reach out to us! Our
                dedicated team is ready to help you.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> +91 9545569943
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>WhatsApp:</strong> +91 8956338808
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Address:</strong> Office no-2 1st floor, stand view CHS
                behind ST Depot panvel
              </p>
            </div>
            <div>
              {/* Updated Google Map Embed with the Panvel location */}
              <iframe
                title="Global Institute Panvel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0771417909654!2d73.06875791489098!3d19.0724600570768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8698a2a5a61%3A0x1b59d3c3247c2246!2sYour%20Institute%20Name%20Panvel!5e0!3m2!1sen!2sin!4v1678253945580!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Send Us a Message
            </h3>
            {/* Contact Form (Add your form handling logic) */}
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
