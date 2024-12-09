import React from "react";
import DoubleDiv from "./CitiesComponent";

// Define types for props
interface CityWithLocationsProps {
  city: string;
  double: boolean;
  cityData: Array<{
    city: string;
    areas: string[];
  }>;
}

const CityWithLocations = ({ city, double, cityData }:CityWithLocationsProps) => {
  // Split cityData into two halves
  const halfLength = Math.ceil(cityData.length / 2);
  const firstHalf = cityData.slice(0, halfLength);
  const secondHalf = cityData.slice(halfLength);

  return (
    <div>
      <h1 className="heading-2 max-md:!text-[2.2rem] underline decoration-white underline-offset-8">
        {city}
      </h1>

      <div className="mt-8">
        {double ? (
          <div className="flex flex-col md:flex-row md:gap-[10rem]">
            {/* First Column */}
            <div className="flex flex-col">
              {firstHalf.map((item, index) => (
                <DoubleDiv
                  key={index}
                  areaName={item.city}
                  areas={item.areas}
                />
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-col">
              {secondHalf.map((item, index) => (
                <DoubleDiv
                  key={index}
                  areaName={item.city}
                  areas={item.areas}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[5rem] lg:gap-[10rem]">
            {cityData.map((item, index) => (
              <DoubleDiv
                key={index}
                areaName={item.city}
                areas={item.areas}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CityWithLocations;
