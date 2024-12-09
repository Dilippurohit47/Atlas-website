import Link from "next/link";
import React, { SetStateAction, useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
const places = [
  { name: "All Properties" },
  { name: "New York" },
  { name: "Florida" },
  { name: "Colorado" },
  { name: "Texas" },
];

interface MobileMenuTypes {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuTypes> = ({ open }) => {
  const [openNewSidebar, setOpenNewSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <div
      className={`menuDiv h-[92vh] flex bg-white w-full absolute left-0 transition-all overflow-hidden ease-in-out duration-500 py-3 ${
        open
          ? "top-[8.5vh] opacity-1 z-50"
          : "top-[30vh] opacity-0 -z-50 pointer-events-none"
      }`}
      style={{ overflowY: "auto" }} // Allow scrolling inside the menu
    >
      <div
        className={`flex flex-col w-full absolute transition ease-in-out duration-500 justify-center items-center h-full capitalize ${
          openNewSidebar ? "-translate-x-[100vw]" : "translate-x-[0vw]"
        }`}
      >
        <div
          className="flex gap-1 items-center"
          onClick={() => setOpenNewSidebar(true)}
        >
          <h3 className="text-3xl font-bold">Book a Property</h3>
          <div className="translate-y-1">
            <IoIosArrowForward size={25} />
          </div>
        </div>
        {links.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`text-3xl font-bold capitalize ${
              activeLink === link.url ? "text-blue-600" : "text-black"
            }`}
            onClick={() => setActiveLink(link.url)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div
        className={`flex flex-col space-y-3 justify-center items-center w-full transition ease-in-out duration-500 ${
          openNewSidebar ? "translate-x-[0vw]" : "translate-x-[100vw]"
        }`}
      >
        <div
          className="flex gap-1 items-center"
          onClick={() => setOpenNewSidebar(false)}
        >
          <div className="translate-y-[2px] text-gray-400">
            <IoIosArrowForward size={25} className="rotate-[180deg]" />
          </div>
          <h3 className="text-3xl text-gray-400 font-bold">Back</h3>
        </div>
        {places.map((place, index) => (
          <a key={index} className="text-3xl font-bold" href="#">
            {place.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
