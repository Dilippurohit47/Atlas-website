import Link from "next/link";
import React from "react";

// Define props type
interface CitiesComponentProps {
  areaName: string;
  areas: string[];
}

const CitiesComponent = ({ areaName, areas }: CitiesComponentProps) => {
  return (
    <div className="flex flex-col gap-6 mb-6 items-center justify-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        {/* Area Name */}
        <h3 className="heading-3 cursor-pointer underline decoration-white underline-offset-2">
          {areaName}
        </h3>

        {/* Areas List */}
        <div className="text-gray-400 text-[1rem] flex flex-col gap-4 max-md:gap-2">
          {areas.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="text-center hover:text-blue-500 max-md:text-[1.10rem]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitiesComponent;
