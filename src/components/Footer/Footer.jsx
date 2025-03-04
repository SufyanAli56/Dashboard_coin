import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="p-4 lg:p-6 lg:ml-44  py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8">
        
        {/* Left Side: Brand & Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <h3 className="text-base md:text-lg  font-semibold text-black">
            Copyright © 2024 Peterdraw
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-gray-500 text-sm">
            <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-500 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-green-500 transition">Contact</a>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4 text-xl w-full md:w-auto">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            <FaSquareXTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-500 transition">
            <CiYoutube />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition">
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
