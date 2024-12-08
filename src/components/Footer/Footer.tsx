import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#24323D]  justify-center  lg:h-[45vh] h-[100vh] w-full px-2  lg:flex-row lg:gap-[5rem] xl:gap-[10rem] flex flex-col md:flex-col items-center gap-[4.5rem] md:gap-[4rem]">
      <div className="    flex items-center   mt-14 justify-center">
        <Image
          alt="Logo"
          src="/logo-white-atlas.png"
          height={260}
          width={260}
          className="text-animate "
        />
      </div>

      <div className="flex flex-col px-4  lg:mt-[2rem] items-center lg:flex-col gap-6  max-w-[35rem] ">
        <h5 className="text-[1.1rem] text-white text-center">
          Sign up with your email address to receive news and updates.
        </h5>
        <div className="flex lg:flex-row md:flex-col flex-col sm:flex-row gap-6 justify-center items-center">
          <input
            type="text"
            placeholder="Email address"
            className="px-6 py-3 md:w-[25rem]  sm:py-5 rounded-lg w-full outline-none min-w-[18rem] focus:outline-none"
          />
          <button className="primary-button  w-[10rem] md:w-[10rem] sm:w-[15rem]">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-col-reverse  gap-12 md:gap-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <Link href="#" className="underline text-blue-600 text-[1.2rem]">
            admin@atlasvrm.com
          </Link>
          <h6 className="text-white  text-[1.2rem]">(315) 760-6482</h6>
        </div>

        <div className="flex   text-white gap-3 ">
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
          <Image
            alt="tweeter"
            src="/twitter.png"
            height={20}
            width={20}
            className="text-animate   "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
