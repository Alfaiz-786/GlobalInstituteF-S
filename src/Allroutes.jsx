import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "./Courses/AllCourses";
import AboutUs from "./AboutUs/AboutUs";
import ChooseUs from "./ChooseUs/ChooseUS";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
// import CourseDetail from "./Components/CourseDetail";
import CertificateInFiremen from "./Components/CertificateInFiremen";
import DiplomaInFireAndSafety from "./Components/DiplomaInFireAndSafety";
import PGInFireAndSafetyManagement from "./Components/PGInFireAndSafetyManagement";
import AdvanceDiplomaInIndustrialSafety from "./Components/AdvanceDiplomaInIndustrialSafety";
import fire5 from "./assets/fire5.png";
import fire4 from "./assets/fire4.png";
import fire7 from "./assets/fire7.png";
import fire6 from "./assets/fire6.png";

const AllRoutes = () => {
  const courses = [
    {
      id: 1,
      title: "Certificate in Firemen",
      description: "Basic course for aspiring firefighters.",
      duration: "3 months",
      level: "Beginner",
      image: fire5,
    },
    {
      id: 2,
      title: "Diploma In Fire & Safety Management",
      description: "In-depth program covering fire and safety protocols.",
      duration: "6 months",
      level: "Intermediate",
      image: fire7,
    },
    {
      id: 3,
      title: "PG Diploma In Fire & Safety Management",
      description: "Advanced program with a focus on safety management.",
      duration: "12 months",
      level: "Advanced",
      image: fire6,
    },
    {
      id: 4,
      title: "Advanced Diploma In Industrial Safety",
      description: "Specialized course for industrial safety professionals.",
      duration: "9 months",
      level: "Advanced",
      image: fire4,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses courses={courses} />} />
      {/* <Route
        path="/courses/:title"
        element={<CourseDetail courses={courses} />}
      /> */}
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/chooseus" element={<ChooseUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/courses/1" element={<CertificateInFiremen />} />
      <Route path="/courses/2" element={<DiplomaInFireAndSafety />} />
      <Route path="/courses/3" element={<PGInFireAndSafetyManagement />} />
      <Route path="/courses/4" element={<AdvanceDiplomaInIndustrialSafety />} />
    </Routes>
  );
};

export default AllRoutes;
