import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://wecreativetech.in/wp-content/uploads/2023/09/we-creative-tech-logo-e1695318995174.png"
          alt="Logo"
          className="h-10"
        />
      </Link>
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-orange-500">HOME</Link>
        <Link to="/about" className="hover:text-orange-500">ABOUT US</Link>
        <Link to="/programs" className="hover:text-orange-500">OUR PROGRAMS</Link>
        <Link to="/blogs" className="hover:text-orange-500">BLOGS</Link>
        <Link to="/centers" className="hover:text-orange-500">CENTERS</Link>
        <Link to="/contact" className="hover:text-orange-500">CONTACT US</Link>
      </nav>
      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold">
        REQUEST A BROCHURE
      </button>
    </header>
  );
};

export default Navbar;
