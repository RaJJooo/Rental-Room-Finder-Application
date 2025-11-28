import React from "react";
import bannerPerson from "../assets/banner_person.jpg"; // update path

const SellRentBanner = () => {
  return (
    <div className="w-full rounded-3xl px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-around">
      
      {/* Left Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-[#0d2154]">
          Sell or rent faster at the right price!
        </h1>
        <p className="text-gray-600 mt-3">
          Your perfect buyer is waiting, list your property now
        </p>

        <button className="mt-6 bg-[#0077ea] text-white font-semibold text-lg px-8 py-3 rounded-md shadow hover:bg-blue-600 transition">
          Post Property, It's FREE
        </button>

        <div className="mt-4 flex items-center gap-2 text-[#0d2154] font-medium cursor-pointer">
          <p>Post via</p>
          <span className="text-green-600 text-xl">🟢</span>
          WhatsApp →
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0">
        <img 
          src={bannerPerson}
          alt="Person with phone"
          className="h-72 object-contain"
        />
      </div>

    </div>
  );
};

export default SellRentBanner;
