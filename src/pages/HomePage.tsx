import React from "react";

const HomePage = () => {
  return (
    <div className="bg-image-homepage relative w-full flex justify-center items-center  bg-red-500">
      <div
        style={{ height: "calc(100vh - 7.3rem)" }}
        className="bg-black z-0 w-full opacity-40  absolute  "
      ></div>
      <div className="flex space-y-10 flex-col  justify-center z-10 items-center h-2/4 w-2/4">
        <button className=" primary-button  ">List Your Property</button>
        <h2 className="heading-2 text-animate ">
          Luxury Property Management <br /> customized for you{" "}
        </h2>
        <button className=" primary-button ">Book Now</button>
      </div>
    </div>
  );
};

export default HomePage;
