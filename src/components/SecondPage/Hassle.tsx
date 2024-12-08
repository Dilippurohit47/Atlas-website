import Image from "next/image";
import React from "react";

const Hassle = () => {
  return (
    <div className="h-[60%] bg-[#24323D] flex gap-20 justify-between items-center w-full">
      <div className=" w-[36.5vw] flex justify-end items-center">
        <Image
          src="/key-in-hand.jpg"
          height={200}
          width={200}
          alt="image"
          className="h-[34vh] w-[22vw] rounded-3xl"
        />
      </div>

      <div className="w-2/4 flex flex-col items-start justify-center">
        <h2 className="text-start heading-2 mb-10 "> Hand Over the Hassle</h2>
        <p className="text-gray-200 text-[1.1rem]   w-[90%]  mb-4">
          Simplify your life as a vacation rental owner. Our all-inclusive
          service provides the expertise and team necessary to navigate the
          complexities of the short-term rental market successfully
        </p>
        <h3 className="text-[1.1rem] mb-6 text-white font-bold">
          More Money. Less Stress.
        </h3>
        <button className="primary-button">Free Property Evaluation</button>
      </div>
    </div>
  );
};

export default Hassle;
