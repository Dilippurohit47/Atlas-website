import React from "react";
import { GiCheckMark } from "react-icons/gi";

interface OfferListtype {
  heading: string;
  offerList: string[];
}

const OfferList: React.FC<OfferListtype> = ({ heading, offerList }) => {
  return (
    <div className="flex flex-col gap-10  max-lg:gap-6 mt-12 px-2 ">
      <h1 className="underline heading-2  xl:!text-[2.3rem]  lg:!text-[2rem] max-lg:!text-[1.8rem] !leading-[2rem] ">{heading}</h1>
      <div className="flex flex-col text-center  w-full  justify-center items-center gap-3  ">
        {offerList.map((offer, i) => (
          <div key={i} className="flex text-white text-center  gap-1  md:gap-2">
            <div className="translate-y-2 ">
              <GiCheckMark />
            </div>
            <h5
              className="text-[1.2rem]  inline-block p-0 m-0  whitespace-normal"
              style={{ display: "inline-block" }}
            >
              {offer}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferList;
//  lg:w-[30rem]