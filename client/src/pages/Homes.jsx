import React, { useState } from "react";
// import { roomsData } from "../data/roomsData"; // adjust path
import { Link } from "react-router-dom";
import { dummyroomdata, assets } from "../assets/assets";

const Homes = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [food, setFood] = useState("");
  const [ac, setAc] = useState("");

  // FILTER FUNCTION
  const filteredRooms = dummyroomdata.filter((room) => {
    return (
      room.title.toLowerCase().includes(search.toLowerCase()) &&
      (type ? room.type === type : true) &&
      (food ? room.Foods.toString() === food : true) &&
      (ac ? room.AC.toString() === ac : true)
    );
  });

  return (
    <div className="p-6 flex flex-col gap-8">

      {/* 🔍 FILTER SECTION */}
      <div className="bg-white shadow-md p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Find Your Perfect PG</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by title or location..."
            className="border p-3 rounded-lg w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Room Type */}
          <select
            className="border p-3 rounded-lg w-full"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Room Type</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Sharing">Double Sharing</option>
          </select>

          {/* Food */}
          <select
            className="border p-3 rounded-lg w-full"
            onChange={(e) => setFood(e.target.value)}
          >
            <option value="">Food</option>
            <option value="true">Food Available</option>
            <option value="false">No Food</option>
          </select>

          {/* AC */}
          <select
            className="border p-3 rounded-lg w-full"
            onChange={(e) => setAc(e.target.value)}
          >
            <option value="">AC</option>
            <option value="true">AC</option>
            <option value="false">Non-AC</option>
          </select>
        </div>
      </div>

      {/* 📌 ROOMS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div
              key={room._id}
              className="bg-white shadow-md rounded-xl overflow-hidden border"
            >
              {/* Image */}
              <img
                src={room.images[0]}
                alt={room.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold">{room.title}</h2>
                <p className="text-gray-600 mb-2">{room.location}</p>

                <p className="font-semibold text-lg">₹ {room.price}/month</p>

                <div className="mt-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      room.available
                        ? "bg-green-200 text-green-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {room.available ? "Available" : "Not Available"}
                  </span>
                </div>
{/* home-details/:id */}
                {/* Details Button */}
                <Link to={`/home-details/${room._id}`}>
                  <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3 text-lg">
            No PGs match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Homes;
