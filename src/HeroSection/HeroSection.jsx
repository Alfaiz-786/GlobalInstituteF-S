import React from "react";
import Carousels from "../Components/Crousel";
import AboutInstitute from "../Components/AboutInstitute";
import Courses from "../Components/Courses";
import PlacementPartners from "../Components/PlacementPatners";
import ChooseUS from "../ChooseUs/ChooseUS";
import Testimonials from "../Components/Testimonials";

const HeroSection = () => {
  return (
    <>
      <Carousels />
      <AboutInstitute />
      <Courses />
      <PlacementPartners />
      <ChooseUS />
      <Testimonials />
    </>
  );
};

export default HeroSection;
