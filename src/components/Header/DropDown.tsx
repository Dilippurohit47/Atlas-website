"use client";
import Link from "next/link";
import React from "react";

// Defining types for the props passed to DropDown component
interface DropDownProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const places = [
  { name: "All Properties" },
  { name: "New York" },
  { name: "Florida" },
  { name: "Cloradio" },
  { name: "Cloradio" },
];

const DropDown: React.FC<DropDownProps> = ({ show, setShow }) => {
  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-blue-500 flex z-50 flex-col w-36 py-2 bg-opacity-80 absolute px-2 justify-center items-center rounded-lg transition-all ease-in-out duration-300 ${
        show ? "show" : "opacity-0 pointer-events-none"
      }`}
      aria-expanded={show ? "true" : "false"}
      role="menu" 
    >
      <ul role="none" className="space-y-2">
        {places.map((item, index) => (
          <li key={index}>
            <Link
              className="text-white  text-[1.1rem] font-semibold"
              href="#"
              role="menuitem" 
              tabIndex={0} 
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
