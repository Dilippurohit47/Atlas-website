import CityWithLocations from "@/components/locations/CityWithLocations";
import React from "react";

const Locations = () => {
  return (
    <div className=" px-16 items-center  justify-center  bg-[#24323D] flex-col py-16 flex flex-wrap md:flex-row gap-[3rem] lg:gap-[10rem]   ">
      <CityWithLocations
        city={"New York"}
        double={true}
        cityData={[
          {
            city: "Finger Lakes",
            areas: [
              "Seneca Lake",
              "Cayuga Lake",
              "Owasco Lake",
              "Skaneateles Lake",
              "Otisco Lake",
            ],
          },
          {
            city: "Oneida Lake",
            areas: [
              "Lake Ontario",
              "Tug Hill",
              "Fair Haven",
              "Sterling",
              "Sandy Creek",
              "Sandy Pond",
              "Oswego",
              "Salmon River",
              "Sackets Harbor",
              "Pulaski",
              "Cicero",
              "Syracuse",
              "Sylvan Beach",
              "Brewerton",
            ],
          },
          {
            city: "Adirondacks",
            areas: ["Old Forge", "Inlet", "Lake Placid"],
          },
          {
            city: "Central New York",
            areas: [
              "Syracuse",
              "Ithaca",
              "Geneva",
              "Seneca Falls",
              "Fulton",
              "Cortland",
              "Baldwinsville",
              "Rome",
              "Utica",
            ],
          },
        ]}
      />
      <CityWithLocations
        city={"Coloarado"}
        double={false}
        cityData={[
          {
            city: "Finger Lakes",
            areas: [
              "Seneca Lake",
              "Cayuga Lake",
              "Owasco Lake",
              "Skaneateles Lake",
              "Otisco Lake",
            ],
          },
          {
            city: "Oneida Lake",
            areas: [
              "Lake Ontario",
              "Tug Hill",
              "Fair Haven",
              "Sterling",
              "Sandy Creek",
              "Sandy Pond",
              "Oswego",
              "Salmon River",
              "Sackets Harbor",
              "Pulaski",
              "Cicero",
              "Syracuse",
              "Sylvan Beach",
              "Brewerton",
            ],
          },
        ]}
      />

      <CityWithLocations
        city={"Coloarado"}
        double={false}
        cityData={[
          {
            city: "Finger Lakes",
            areas: [
              "Seneca Lake",
              "Cayuga Lake",
              "Owasco Lake",
              "Skaneateles Lake",
              "Otisco Lake",
            ],
          },
          {
            city: "Oneida Lake",
            areas: [
              "Lake Ontario",
              "Tug Hill",
              "Fair Haven",
              "Sterling",
              "Sandy Creek",
              "Sandy Pond",
              "Oswego",
              "Salmon River",
              "Sackets Harbor",
              "Pulaski",
              "Cicero",
              "Syracuse",
              "Sylvan Beach",
              "Brewerton",
            ],
          },
        ]}
      />
         <CityWithLocations
        city={"Coloarado"}
        double={false}
        cityData={[
          {
            city: "Finger Lakes",
            areas: [
              "Seneca Lake",
              "Cayuga Lake",
              "Owasco Lake",
              "Skaneateles Lake",
              "Otisco Lake",
            ],
          },
          {
            city: "Oneida Lake",
            areas: [
              "Lake Ontario",
              "Tug Hill",
              "Fair Haven",
              "Sterling",
              "Sandy Creek",
              "Sandy Pond",
              "Oswego",
              "Salmon River",
              "Sackets Harbor",
              "Pulaski",
              "Cicero",
              "Syracuse",
              "Sylvan Beach",
              "Brewerton",
            ],
          },
        ]}
      />
    </div>
  );
};

export default Locations;
