import React, { SetStateAction, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
interface LinkType {
  name: string;
}
const links: LinkType[] = [
  { name: "services" },
  { name: "blogs" },
  { name: "list a property" },
  { name: "book a property" },
  { name: "locations" },
];

const places = [
  { name: "All Properties" },
  { name: "New York" },
  { name: "Florida " },
  { name: "Cloradio" },
  { name: "Cloradio" },
];

interface MobileMenuTypes {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuTypes> = ({ open }) => {
  const [openNewSidebar, SetOpenNewSideBar] = useState<boolean>(false);
  return (
    <div
      className={` h-[90vh] flex   w-full absolute top left-0 transition-all overflow-hidden ease-in-out duration-500  py-3 ${
        open ? "top-[8.5vh]  opacity-1" : "top-[30vh]  opacity-0"
      } `}
    >
      <div
        className={`flex flex-col w-full  absolute transition ease-in-out duration-500 justify-center items-center h-full capitalize ${
          openNewSidebar ? "-translate-x-[100vw]" : "translate-x-[0vw]"
        }`}
      >
        <div
          className=" flex gap-1 items-center "
          onClick={() => SetOpenNewSideBar(true)}
        >
          <h3 className="text-3xl font-bold">Book a Property</h3>
          <div className=" translate-y-1">
            <IoIosArrowForward size={25} />
          </div>
        </div>
        {links.map((link, index) => (
          <a key={index} className="text-3xl font-bold capitalize" href="#">
            {link.name}
          </a>
        ))}
      </div>

      <div
        className={`  flex flex-col space-y-3 justify-center items-center   w-full transition ease-in-out duration-500 ${
          openNewSidebar ? "translate-x-[0vw]" : "translate-x-[100vw]"
        }`}
        onClick={() => SetOpenNewSideBar(false)}
      >
        <div
          className=" flex gap-1 items-center "
          onClick={() => SetOpenNewSideBar(true)}
        >
          {" "}
          <div className=" translate-y-[2px] text-gray-400">
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
