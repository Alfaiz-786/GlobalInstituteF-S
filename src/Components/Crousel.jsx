import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousels = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            style={{ objectFit: "cover", height: "70vh", width: "100%" }}
            className="d-block w-100"
            src="src/assets/fire1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-4xl font-bold text-white">
              Fire Safety Courses
            </h1>
            <p className="text-lg text-white">
              Join our certificate program for comprehensive fire safety
              training.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={{ objectFit: "cover", height: "70vh", width: "100%" }}
            className="d-block w-100"
            src="src/assets/fire2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-4xl font-bold text-white">
              Advanced Fire Safety
            </h1>
            <p className="text-lg text-white">
              Explore advanced techniques and strategies in industrial fire
              safety.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={{ objectFit: "cover", height: "70vh", width: "100%" }}
            className="d-block w-100"
            src="src/assets/fire3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-4xl font-bold text-white">
              Fire Safety Management
            </h1>
            <p className="text-lg text-white">
              Enroll in our PG Diploma program for in-depth fire safety
              management.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
