import Image from "next/image";
import React from "react";

interface ServieCardType {
    imageUrl : string,
    heading:string,
    paragraphs:string[]
}


const ServiceCard = ({ imageUrl, heading, paragraphs }:ServieCardType) => {
  return (
    <div className="bg-white px-7 max-w-[20rem] lg:max-w-[22rem] xl:max-w-[24rem] flex flex-col  items-center py-7  xl:px-8 xl:py-8 rounded-md">
      <Image
        src={imageUrl}
        alt="money-image"
        height={250}
        width={250}
        className="lg:w-full rounded-md"
      />
      <h2 className="text-blue-600    text-[1.2rem] lg:tex-[1.3rem] font-bold   mt-4 xl:text-[1.6rem] ">
        {heading}
      </h2>
      <div className="flex flex-col items-center mt-4 justify-center gap-4">
        {paragraphs.map((i,index) => (
          <p  key={index} className="text-blue-500 text-center leading-snug xl:text-[1rem]">
          {i}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
