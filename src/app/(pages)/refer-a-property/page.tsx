"use client";
import Form from "@/components/Refer-a-property/Form";
import HowItsWork from "@/components/Refer-a-property/HowItsWork";
import React from "react";

const ReferAProperty = () => {
  return (
    <div className="">
      <div className="bg-blue-500  flex justify-center items-center flex-col py-10 px-6 gap-8">
        <h3 className="heading-2 !text-[2.5rem] lg:!text-[3.5rem]  !leading-[1] ">
          Want to Earn Money ?{" "}
        </h3>
        <p className="leading-snug text-[1.2rem] lg:text-[1.3rem]  text-white  text-center">
          Refer Any of our Property and recieve $500
        </p>
      </div>

      <div className="py-5 xl:px-16 px-5  flex flex-col gap-20 md:mt-10 mt-5 md:flex-row">
        <HowItsWork />
        <div className=" flex flex-col lg:w-[50rem] justify-start items-start">
          <h2 className="text-4xl font-bold leading-tight  !text-black">
            {" "}
            Refer a Friend & Receive $500
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ReferAProperty;
