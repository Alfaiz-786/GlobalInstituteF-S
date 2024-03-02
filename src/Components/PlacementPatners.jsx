import React, { useState, useEffect } from "react";

const PlacementPartners = () => {
  const initialPartners = [
    {
      name: "Company A",
      logo: "src/assets/logo-1.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company B",
      logo: "src/assets/logo-2.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company C",
      logo: "src/assets/logo-3.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company D",
      logo: "src/assets/logo-5.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company E",
      logo: "src/assets/logo-6.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company A",
      logo: "src/assets/logo-7.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company B",
      logo: "src/assets/logo-9.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company C",
      logo: "src/assets/logo-10.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company D",
      logo: "src/assets/logo-11.jpeg", // Replace with actual logo URL
    },
    {
      name: "Company E",
      logo: "src/assets/logo-12.jpeg", // Replace with actual logo URL
    },
  ];

  const logosPerSet = 5;
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(initialPartners.length / logosPerSet)
      );
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Clear the interval on component unmount
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
