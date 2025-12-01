import React from "react";
import privateIcon from "../assets/private_room.jpg";     // update path
import doubleIcon from "../assets/double_room.webp";       // update path
import tripleIcon from "../assets/triple_room.png";       // update path
import homeIcon from "../assets/home_icon.jpg";           // update path
import { useNavigate } from "react-router-dom";

const RoomSharingOptions = () => {

  const navigate=useNavigate();

  const cards = [
    {
      title: "Private Room",
      properties: "100+ PGs",
      icon: privateIcon,
    },
    {
      title: "2 per Room",
      properties: "200+ PGs",
      icon: doubleIcon,
    },
    {
      title: "More than 2 per Room",
      properties: "200+ PGs",
      icon: tripleIcon,
    },
  ];

  return (
    <div className="w-full rounded-3xl px-6 md:px-16 py-12">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <img src={homeIcon} alt="Home" className="h-12" />
        <div>
          <h1 className="text-3xl font-bold text-[#0d2154]">Interested in sharing?</h1>
          <p className="text-gray-600">Browse room sharing options</p>
        </div>
      </div>

      {/* Cards */}
      <div onClick={()=>{navigate("/rooms"); scrollTo(0,0)}}
      className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
          >
            <img src={card.icon} alt={card.title} className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#0d2154]">{card.title}</h2>
            <p className="text-gray-500 mt-1">{card.properties}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RoomSharingOptions;
