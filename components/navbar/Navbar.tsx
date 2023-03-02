import React from "react";
import Image from "next/image";
import search from "public/assets/button-footer/search.svg";
import menu from "public/assets/button-footer/menu.svg";

const Navbar = () => {
  return (
    <nav className="bg-primary-violet ">
      <div className="container">
        <div className="min-h-[112px] flex justify-between items-center h-full">
          <h1 className="font-bold text-[40px] text-white">EDU</h1>
          <form className="relative">
            <input
              type="text"
              placeholder="Search courses"
              className="min-w-[570px] min-h-[48px] rounded-full px-5"
            />
            <button className="w-12 h-12 bg-primary-green flex justify-center items-center rounded-full absolute right-0 -mt-12">
              <Image src={search} alt="search" />
            </button>
          </form>
          <div>
            <button className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
              <Image src={menu} alt="menu-button" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
