import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyroomdata, assets } from "../assets/assets";

const HomeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const data = dummyroomdata.find((item) => item._id === id);
    setRoom(data);

    if (data?.images?.length > 0) {
      setThumbnail(data.images[0]);
    }
  }, [id]);

  if (!room) return <p className="mt-20 text-center">Loading...</p>;

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 pb-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 hover:text-black transition cursor-pointer"
      >
        <img
          src={assets.arrow_icon}
          alt="Arrow icon"
          className="rotate-180 opacity-65 w-5"
        />
        Back to all rooms
      </button>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {/* LEFT SIDE CONTENT */}
        <div className="lg:col-span-2">
          {/* MULTIPLE IMAGES */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 w-20">
              {room.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className={`border max-w-24 rounded overflow-hidden cursor-pointer 
                  ${
                    thumbnail === image ? "border-black" : "border-gray-400/40"
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Main Selected Image */}
            <div className=" max-w-100 rounded-xl overflow-hidden">
              <img src={thumbnail} alt="Selected Room" className="w-full" />
            </div>
          </div>

          {/* Title, Location, Rating */}
          <div className="mt-6 space-y-3">
            <h1 className="text-3xl font-bold">{room.title}</h1>
            <p className="text-gray-600 text-lg">
              📍 {room.location} • ⭐ {room.rating}
            </p>
          </div>

          <hr className="my-6" />

          {/* AMENITIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg"
                >
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6" />

          {/* Additional Details */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Details</h2>

            <p className="text-gray-700">
              <strong>Room Type:</strong> {room.type}
            </p>

            <p className="text-gray-700">
              <strong>Availability:</strong>{" "}
              {room.available ? "Available" : "Not Available"}
            </p>

            <p className="text-gray-700">
              <strong>Property Type:</strong> {room.property_type}
            </p>

            <p className="text-gray-700">
              <strong>Balcony:</strong> {room.Balcony ? "Yes" : "No"}
            </p>

            <p className="text-gray-700">
              <strong>Food Availability:</strong>{" "}
              {room.Foods ? "Food Provided" : "No Food"}
            </p>

            <p className="text-gray-700 mt-3">
              <strong>Furnished Includes:</strong>
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              {room.Furnished.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="text-gray-700 mt-3">
              <strong>Contact No: </strong>
              {room.Contact}
            </p>
          </div>
          <hr className="my-6" />

          {/* RULES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Rules</h2>
            <p className="text-gray-700 leading-relaxed">
              <ul className="list-disc ml-6 text-gray-700">
                {room.Rules.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR - BOOKING BOX */}
        <form className="border p-6 rounded-xl shadow-md h-fit bg-white">
          <h2 className="text-2xl font-bold mb-4">₹ {room.price} / month</h2>

          <p className="text-gray-700 mb-1">
            <strong>Owner:</strong> {room.owner}
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Status:</strong>{" "}
            {room.available ? (
              <span className="text-green-600 font-semibold">Available</span>
            ) : (
              <span className="text-red-600 font-semibold">Not Available</span>
            )}
          </p>

          <button
            type="button"
            disabled={!room.available}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              room.available
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {room.available ? "Book Now" : "Unavailable"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeDetails;
