import Image from "next/image";
import React from "react";

const Hassle = () => {
  return (
    <div className="h-[60vh] max-md:h-full  bg-[#24323D] flex lg:gap-20 justify-between items-center w-full max-md:flex-col px-6 py-10 max-md:gap-3 md:gap-12 ">
      <div className=" w-[36.5vw]  max-md:w-full   flex justify-start items-center lg:justify-end">
        <Image
          src="/key-in-hand.jpg"
          height={200}
          width={200}
          alt="image"
          className="h-[34vh] lg:w-[22vw] md:w-full max-md:w-[20rem]   max-md:h-[30vh]  rounded-3xl"
        />
      </div>

      <div className="w-2/4  max-md:w-full flex flex-col items-start justify-center">
        <h2 className="text-start heading-2 mb-10 "> Hand Over the Hassle</h2>
        <p className="text-gray-200 text-[1.1rem]   w-[90%]  mb-4">
          Simplify your life as a vacation rental owner. Our all-inclusive
          service provides the expertise and team necessary to navigate the
          complexities of the short-term rental market successfully
        </p>
        <h3 className="text-[1.1rem] mb-6 text-white font-bold">
          More Money. Less Stress.
        </h3>
        <button className="primary-button max-md:!text-[1rem] max">
          Free Property Evaluation
        </button>
      </div>
    </div>
  );
};

export default Hassle;
