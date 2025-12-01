import React from "react";
import foodImg from "../assets/food.webp";       // update path
import wifiImg from "../assets/wifi.jpg";       // update path
import acImg from "../assets/ac.webp";           // update path
import laundryImg from "../assets/laundry.jpg"; // update path
import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate=useNavigate();

  const amenities = [
    { title: "Food Service", image: foodImg },
    { title: "Wifi", image: wifiImg },
    { title: "AC Room", image: acImg },
    { title: "Laundry Available", image: laundryImg },
  ];

  return (
    <div className="w-full px-6 md:px-16 py-10">
      <h1 className="text-4xl font-bold mb-2">Homes with AC, food and more</h1>
      <p className="text-gray-600 mb-8">
        Choose your preferred amenities and services
      </p>

      <div onClick={()=>{navigate("/rooms"); scrollTo(0,0)}}
      className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {amenities.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer group"
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-center">{item.title}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
