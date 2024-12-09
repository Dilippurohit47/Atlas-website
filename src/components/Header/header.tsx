"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Favicon from "../../app/Favicon.ico";
import Image from "next/image";
import MobileMenu from "./mobileMenu";
import MenuButton from "./MenuButton";
import DropDown from "./DropDown";
import Link from "next/link";

interface LinkType {
  name: string;
  url: string;
}

const links: LinkType[] = [
  { name: "Services", url: "services" },
  { name: "Blog", url: "blog" },
  { name: "List Your Property", url: "list-your-property" },
  { name: "Refer a Property", url: "refer-a-property" },
  { name: "Locations", url: "locations" },
];
const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <header className="relative bg px-5 flex items-center justify-between lg:px-10 lg:py-[3.2rem] h-[4.7rem] ">
      {/* Logo Section */}
      <div>
        <Image
          alt="Logo"
          src={Favicon}
          height={30}
          width={30}
          className="lg:hidden md:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
        />
        <Image
          alt="Logo"
          src="/logo-for-large-screens.png"
          height={180}
          width={180}
          className="max-lg:hidden text-animate"
        />
      </div>

      {/* Main Navigation */}
      <nav className="flex gap-7 max-lg:hidden">
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <h1 className="text-[1.1rem] text-animate font-bold cursor-pointer hover:text-blue-400 transition ease-in duration-100">
            Book a Property
          </h1>
          <DropDown show={showDropdown} setShow={setShowDropdown} />
        </div>

        <ul className="flex gap-7">
          {links.map((link, index) => (
            <li key={index} className="text-animate">
              <Link
                className="text-[1.1rem] font-bold hover:text-blue-400 transition ease-in duration-100"
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <MenuButton open={openMobileMenu} setOpen={setOpenMobileMenu} />
      <MobileMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
