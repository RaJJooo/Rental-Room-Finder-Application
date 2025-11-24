import React from "react";
import { assets, menulinks } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (setShowLogin) => {

  const navigate=useNavigate()


  return (
    <div className="flex" style={{backgroundColor:"#2F5755"}}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className=" h-17 ml-15" />
      </Link>
      <div className="m-6 w-full text-right ">
        {menulinks.map((link, index) => (
          <Link
            className="p-3 font-light text-amber-50 sm:font-bold hover:text-amber-500 "
            key={index}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div  className=" m-2 pl-3 pr-3 flex ">
        <button onClick={()=> navigate('./owner')} className="bg-amber-100 m-1 p-3 cursor-pointer font-light sm:font-bold hover:text-amber-500 hover:bg-black ">Dashboard</button>
        <button onClick={()=> setShowLogin(true)} className="bg-amber-100 m-1 p-3 cursor-pointer font-light sm:font-bold hover:text-amber-500 hover:bg-black">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
