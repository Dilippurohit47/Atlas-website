import React from "react";

interface MenuButtonProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({ open, setOpen }) => {
  return (
    <div
      className="flex flex-col gap-3  relative lg:hidden"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`bg-black h-[1px] absolute right-[2vw]  -top-[0.1rem]  transition ease-out duration-200 w-9 ${
          open ? "rotate-[135deg] w-7 right-[2.5vw] top-[0.1rem] " : ""
        }`}
      ></div>
      <div
        className={`bg-black h-[1px] absolute right-[2vw] -top-[0.1rem]  transition ease-out duration-200 w-9 ${
          open ? "-rotate-[135deg] w-7 right-[2.5vw] top-[0.1rem]" : "mt-3"
        }`}
      ></div>
    </div>
  );
};

export default MenuButton;
