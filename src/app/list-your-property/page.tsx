"use client";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";

const ListYourProperty = () => {
  return (
    <div className="">
      <div className="bg-blue-500  flex justify-center items-center flex-col py-10 px-6 gap-8">
        <h3 className="heading-2 !text-[2.5rem] lg:!text-[4rem]  !leading-[1] ">
          Intrested in working together ?{" "}
        </h3>
        <p className="leading-snug text-[1.2rem] lg:text-[1.5rem] text-white  text-center">
          Fill out some info and we will be in touch shortly! We can't wait to
          hear from you!
        </p>
      </div>

      <div className="py-5 px-5 flex flex-col gap-10  md:flex-row">
        <Image
          src="/property-list-image.jpeg"
          height={300}
          width={300}
          alt="property-image"
          className="xl:w-[450px] w-full md:w-[450px]"
        />
        <div className=" flex flex-col justify-start items-start">
          <h2 className="text-[2rem] font-bold leading-tight  !text-black">
            {" "}
            Free Property Evaluation{" "}
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ListYourProperty;
