import React from "react";
import aboutImg from "../assets/aboutImg.jpg"; // update path
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-0 px-6 md:px-20 flex flex-col md:flex-row items-center justify-around gap-16 ">
      
      {/* Left Text Section */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2154] mb-4">
          About EasyPGRooms
        </h2>

        {/* Blue underline */}
        <div className="w-16 h-[3px] bg-blue-500 mb-6"></div>

        <p className="text-gray-600 leading-relaxed text-lg">
          We, at EasyPGRooms, are India's fastest-growing network of managed 
          Paying Guest (PG) rentals. We hope to provide you with the best 
          renting solutions with the help of our designs and technology.
          Our services across the country will help you find and book Paying 
          Guest (PG) rental homes.
        </p>

        {/* Button */}
        <button 
          onClick={() => {navigate("/about"); scrollTo(0,0) }} 
          className="mt-8 border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-500 hover:text-white transition">
          Read More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center w-full md:w-auto">
        <img 
          src={aboutImg}
          alt="About BookMyPG"
          className="w-[380px] md:w-[480px] object-contain"
        />
      </div>

    </div>
  );
};

export default AboutSection;
