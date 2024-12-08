import React from "react";

const HomePage = () => {
  return (
    <div
      className="bg-image-homepage relative max-md:!h-[90vh]  w-full flex justify-center items-center 
 "
    >
      <div
        style={{ height: "calc(100vh - 7.3rem)" }}
        className="bg-black z-0 w-full opacity-[0.3]  absolute max-md:!h-[90vh]   "
      ></div>
      <div className="flex space-y-10 flex-col   justify-center z-10 items-center h-2/4 w-2/4 max-md:w-full">
        <button className=" primary-button  ">List Your Property</button>
        <h2 className="heading-2 text-animate max-md:!text-[1.8rem]  max-md:w-full">
          Luxury Property Management <br /> customized for you{" "}
        </h2>
        <button className=" primary-button ">Book Now</button>
      </div>
    </div>
  );
};

export default HomePage;
