import React from "react";
import { assets } from "../assets/assets";

const DownloadAppInfo = () => {
  return (
    <div className="w-full bg-white py-20 flex items-center justify-center text-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl">

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Connect with us from anywhere!
          </h1>
          <p className="text-gray-600 text-lg">
            Download the mobile app and enjoy the smoothest booking experience right at your fingertips.
          </p>

          <div className="flex gap-6 mt-3">
            <img
              className="w-40 hover:scale-105 transition duration-300 cursor-pointer"
              src={assets.playstore}
              alt="playstore"
            />
            <img
              className="w-40 hover:scale-105 transition duration-300 cursor-pointer"
              src={assets.appstore}
              alt="appstore"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="h-96 md:h-[520px] drop-shadow-2xl"
            src={assets.downloadappinfoimg}
            alt="download info"
          />
        </div>

      </div>
    </div>
  );
};

export default DownloadAppInfo;
