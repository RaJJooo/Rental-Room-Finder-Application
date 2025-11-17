import React from "react";
import { assets, menulinks } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  bg-gray-200">
      <Link to="/">
        <img src={assets.logo} alt="logo" className=" h-17 ml-15" />
      </Link>
      <div className="m-6 w-full text-right ">
        {menulinks.map((link, index) => (
          <Link
            className="p-3 font-light sm:font-bold hover:text-amber-950"
            key={index}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="bg-slate-500 m-3 pl-3 pr-3  ">
        <button className=" p-3 cursor-pointer font-light sm:font-bold hover:text-amber-950">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
