import React from "react";
import { Link } from "react-router-dom";
import boysImg from "../assets/pg_boys.avif";     // update path
import girlsImg from "../assets/pg_girls.avif";   // update path

const CuratedPGCollections = () => {
  return (
    <div className="w-full px-6 md:px-16 py-10 ">
      <h1 className="text-4xl font-bold mb-2">PG collections</h1>
      <p className="text-gray-600 mb-8">in West Bengal</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Boys Card */}
        <Link to="/pg/boys">
          <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src={boysImg}
              alt="For Boys"
              className="w-full h-72 object-cover"
            />
            <div className="absolute top-6 left-6 text-white drop-shadow-lg">
              <h2 className="text-3xl font-bold">For Boys</h2>
              <p className="text-lg">300+ Properties</p>
            </div>
          </div>
        </Link>

        {/* Girls Card */}
        <Link to="/pg/girls">
          <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src={girlsImg}
              alt="For Girls"
              className="w-full h-72 object-cover"
            />
            <div className="absolute top-6 left-6 text-white drop-shadow-lg">
              <h2 className="text-3xl font-bold">For Girls</h2>
              <p className="text-lg">220+ Properties</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CuratedPGCollections;
