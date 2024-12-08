import React from "react";
import OfferList from "./OfferList";

const OfferComponent = () => {
  return (
    <div className="h-[75vh] flex justify-center items-center bg-blue-500 flex-col w-full">
      <div className=" flex items-center justify-center flex-col space-y-4">
        <h1 className="text-[4rem] font-bold text-white">What We Offer</h1>
        <button className="primary-button !bg-black !bg-opacity-70 hover:!bg-opacity-50">
          Get Started
        </button>
      </div>

      <div className="flex  gap-10">
        <OfferList
          heading={"Revenue Maximization"}
          offerList={[
            " Property audit to optimize your listing",
            "Professional photography",
            "Dynamic pricing to maximize revenue",
            " Market across top-performing booking platforms",
          ]}
        />
        <OfferList
          heading={"Cleaning & Maintenance"}
          offerList={[
            " Secure/keyless entry",
            "Property supervision & restocking of home essentials",
            "Trusted maintenance staff to keep you rental in top shape",
          ]}
        />
        <OfferList
          heading={"Guest Communication"}
          offerList={[
            "Personalized guest communication",
            "Full service 24/7 guest management",
          ]}
        />
      </div>
    </div>
  );
};

export default OfferComponent;
