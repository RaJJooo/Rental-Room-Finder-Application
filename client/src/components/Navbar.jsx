import React from "react";
import { assets, menulinks } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (setShowLogin) => {

  const navigate=useNavigate()


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

      <div className=" m-2 pl-3 pr-3 flex ">
        <button onClick={()=> navigate('./owner')} className="bg-slate-500 m-1 p-3 cursor-pointer font-light sm:font-bold hover:text-amber-950">Dashboard</button>
        <button onClick={()=> setShowLogin(true)} className="bg-slate-500 m-1 p-3 cursor-pointer font-light sm:font-bold hover:text-amber-950">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
