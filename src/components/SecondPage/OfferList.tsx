import React from "react";
import { GiCheckMark } from "react-icons/gi";

interface OfferListtype {
  heading: string;
  offerList: string[];
}

const OfferList: React.FC<OfferListtype> = ({ heading, offerList }) => {
  return (
    <div className="flex flex-col gap-6 mt-12 ">
      <h1 className="underline heading-2">{heading}</h1>
      <div className="flex flex-col text-center  w-[30rem] justify-center items-center gap-3  ">
        {offerList.map((offer, i) => (
          <div key={i} className="flex text-white text-center gap-2">
            <div className="translate-y-2">
              <GiCheckMark />
            </div>
            <h5 className="text-[1.1rem]"> {offer}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferList;
