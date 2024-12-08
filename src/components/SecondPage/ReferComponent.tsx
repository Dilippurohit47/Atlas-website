import React from "react";

const ReferComponent = () => {
  return (
    <div className="w-full h-[60vh] bg-image-refer flex  items-center justify-center">
      <div
        style={{ height: "60vh" }}
        className="bg-black z-0 w-full opacity-55  absolute  "
      ></div>
      <div className="z-10 flex items-center justify-center flex-col">
        <h2 className="heading-2 mb-6">Refer a Property</h2>
        <h2 className="heading-2 mb-4">Recieve $500</h2>
        <button className="primary-button">Learn More</button>
      </div>
    </div>
  );
};

export default ReferComponent;
