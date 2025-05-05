import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-[15vh] flex justify-between items-center pl-[3em] pr-[3em] font-sans shadow-[0px_1px_2px_0px_rgba(100,100,111,0.2)] relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black tracking-[2px]">
        <Link to="/">SUMMER_EASE_</Link>
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-[1.2em]">
        <li className="text-[12px] font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200 hover:text-gray-300">
          <Link to="/browse">BROWSE</Link>
        </li>
        <li className="text-[12px] font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200 hover:text-gray-300">
          <Link to="/get-recommendations">GET RECOMMENDATIONS</Link>
        </li>
        <li className="text-[12px] font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200 hover:text-gray-300">
          <Link to="/compare-prices">COMPARE PRICES</Link>
        </li>
        <li className="text-[12px] font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200 hover:text-gray-300">
          <Link to="/about-us">ABOUT US</Link>
        </li>
      </ul>

      {/* Mobile Icon */}
      <button
        className="flex md:hidden hover:cursor-pointer active:rotate-90 transition-transform duration-300 rotate-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiAlignJustify size={24} />
      </button>

      {/* Mobile Dropdown - Fixed positioning and proper z-index */}
      {isOpen && (
        <div className="fixed top-[15vh] left-0 right-0 bg-white shadow-lg flex flex-col p-4 gap-3 z-50 md:hidden w-full">
          <Link
            to="/browse"
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            BROWSE
          </Link>
          <Link
            to="/get-recommendations"
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            GET RECOMMENDATIONS
          </Link>
          <Link
            to="/compare-prices"
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            COMPARE PRICES
          </Link>
          <Link
            to="/about-us"
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
