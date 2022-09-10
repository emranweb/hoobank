import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../content";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" w-full py-6 justify-between items-center flex">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none  justify-end space-x-10 hidden md:block">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={` font-poppins, font-normal cursor-pointer text-[16px] text-white inline-block `}
          >
            <a className="inline-block" href="/">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden relative">
        <img
          src={open ? menu : close}
          alt="menu"
          onClick={() => setOpen((prev) => !prev)}
        />
        <ul
          className={`list-none  flex-col absolute right-0 bg-black-gradient justify-end space-y-4 bg-black-gradient  my-2 rounded-xl p-6 sidebar ${
            open ? "hidden" : "flex"
          }`}
        >
          {navLinks.map((item, index) => (
            <li
              key={item.id}
              className={` font-poppins, font-normal cursor-pointer text-[16px] text-white inline-block `}
            >
              <a className="inline-block" href="/">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
