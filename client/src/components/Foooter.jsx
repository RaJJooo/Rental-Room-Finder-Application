import React from "react";
import { assets } from "../assets/assets"; // logo + social icons if available
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  border-t pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-gray-700">

        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-semibold">
            Easy<span className="text-[#00A86B]">PGRooms</span>
          </h2>

          <p className="mt-4 leading-7">
            Unit no. 1227, 1228,
            <br />
            Kshudiram Nagar, Hatiberia
            <br />
            Haldia, WB - 721657
          </p>

          <a href="mailto:feedback@flatmate.in" className="text-blue-500 underline mt-3 block">
            feedback@easypgrooms.in
          </a>

          <button className="px-6 py-2 mt-5 bg-[#00A86B] text-white rounded-full hover:bg-[#008f5d] duration-300">
            Contact us
          </button>

          <div className="flex gap-4 mt-6 text-2xl text-gray-600">
            <FaLinkedinIn className="cursor-pointer hover:text-[#00A86B]" />
            <FaFacebookF className="cursor-pointer hover:text-[#00A86B]" />
            <FaInstagram className="cursor-pointer hover:text-[#00A86B]" />
            <FaYoutube className="cursor-pointer hover:text-[#00A86B]" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancel</li>
            <li>Careers</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Flatmates</h3>
          <ul className="space-y-2">
            <li>Flatmates in Haldia</li>
            <li>Flatmates in Tamluk</li>
            <li>Flatmates in Pankura</li>
            <li>Flatmates in Kolaghat</li>
            <li>Flatmates in Mahisadal</li>
            <li>Flatmates in Kolkata</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">PGs</h3>
          <ul className="space-y-2">
            <li>PG in Kolkata</li>
            <li>PG in Haldia</li>
            <li>PG in Tamluk</li>
            <li>PG in Pankura</li>
            <li>PG in Kolaghat</li>
            <li>PG in Mahisadal</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Rental Agreement</li>
            <li>Tenant Verification</li>
            <li>Buy Furniture</li>
            <li>Rent Receipt</li>
            <li>Manage Your Flat</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600">
        <p>
          
        </p>

        <button className="px-6 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 duration-300">
          Useful Links ▼
        </button>

        <p>© 2025 EasyPGRooms.in All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
