import React from "react";
import DoubleDiv from "./CitiesComponent";

// Define the types for props
interface CityData {
  city: string;
  areas: string[];
}

interface CityWithLocationsProps {
  city: string;
  double: boolean;
  cityData: CityData[];
}

const CityWithLocations: React.FC<CityWithLocationsProps> = ({ city, double, cityData }) => {
  // Divide the city data into two halves for display in two columns when 'double' is true
  const halfLength = Math.ceil(cityData.length / 2);
  const firstHalf = cityData.slice(0, halfLength);
  const secondHalf = cityData.slice(halfLength);

  return (
    <div className="">
      {/* City heading */}
      <h1 className="heading-2 max-md:!text-[2.2rem] underline decoration-white underline-offset-8">
        {city}
      </h1>

      <div className="mt-8">
        {double ? (
          // If 'double' is true, divide the content into two columns
          <div className="flex flex-col md:flex-row md:gap-[10rem]">
            {/* First column */}
            <div className="flex flex-col">
              {firstHalf.map((item, index) => (
                <DoubleDiv key={index} areaName={item.city} areas={item.areas} />
              ))}
            </div>

            {/* Second column */}
            <div className="flex flex-col">
              {secondHalf.map((item, index) => (
                <DoubleDiv key={index} areaName={item.city} areas={item.areas} />
              ))}
            </div>
          </div>
        ) : (
          // If 'double' is false, display all items in a single column
          cityData.map((item, index) => (
            <div className="flex flex-col gap-[5rem] lg:gap-[10rem]" key={index}>
              <DoubleDiv areaName={item.city} areas={item.areas} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CityWithLocations;
