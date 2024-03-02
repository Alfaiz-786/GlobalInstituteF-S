import React from "react";
import Navbar from "../Components/Navbar";

function Header() {
  return (
    <>
      <div className="app sticky top-0 z-50">
        <div
          className="bg-red-300 text-black p-2 text-center fixed top-0 w-full"
          style={{ width: "100%" }}
        >
          <p
            className="animate-scrollMessage whitespace-nowrap overflow-hidden text-sm"
            style={{
              width: "max-content",
              animation: "scrollMessage 40s linear infinite",
            }}
          >
            Admission Open in Fire and Safety courses for New Academic session
            from April 2023 – 24 / In Association with Our Monitoring ,
            Assessment, and Certification Body MSME- Govt. of India / Fire
            safety Training Centre in panvel, Navi Mumbai / Enroll Now / Join
            for Best Fire Safety courses / Running Successfully Since many years
            / Placements done for Batch 2022-23
          </p>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
