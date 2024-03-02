import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo-1.jpeg";
import logo2 from "../assets/logo-2.jpeg";
import logo3 from "../assets/logo-3.jpeg";
import logo5 from "../assets/logo-5.jpeg";
import logo6 from "../assets/logo-6.jpeg";
import logo7 from "../assets/logo-7.jpeg";
import logo9 from "../assets/logo-9.jpeg";
import logo10 from "../assets/logo-10.jpeg";
import logo11 from "../assets/logo-11.jpeg";
import logo12 from "../assets/logo-12.jpeg";

const PlacementPartners = () => {
  const initialPartners = [
    { name: "Company A", logo: logo1 },
    { name: "Company B", logo: logo2 },
    { name: "Company C", logo: logo3 },
    { name: "Company D", logo: logo5 },
    { name: "Company E", logo: logo6 },
    { name: "Company A", logo: logo7 },
    { name: "Company B", logo: logo9 },
    { name: "Company C", logo: logo10 },
    { name: "Company D", logo: logo11 },
    { name: "Company E", logo: logo12 },
  ];

  const logosPerSet = 5;
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(initialPartners.length / logosPerSet)
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const startIndex = currentSetIndex * logosPerSet;
  const endIndex = startIndex + logosPerSet;
  const currentSet = initialPartners.slice(startIndex, endIndex);

  return (
    <div className="mt-12 mx-4 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center underline">
        Our Placement Partners
      </h2>
      <div className="flex space-x-4 overflow-x-auto justify-center">
        {currentSet.map((partner, index) => (
          <div key={index} className="text-center">
            <img
              src={partner.logo}
              alt={`Logo - ${partner.name}`}
              className="w-48 h-32 object-contain mb-4 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementPartners;
