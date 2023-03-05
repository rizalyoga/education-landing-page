import React from "react";
import Image from "next/image";
import search from "public/assets/button-footer/search.svg";
import menu from "public/assets/button-footer/menu.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary-violet ">
      <div className="container">
        <div className="min-h-[112px] flex justify-between items-center h-full">
          <h1 className="font-bold text-[40px] text-white">Athalia&apos;s</h1>
          {/* <form className="relative">
            <input
              type="text"
              placeholder="Search courses"
              className="min-w-[570px] min-h-[48px] rounded-full px-5"
            />
            <button className="w-12 h-12 bg-primary-green flex justify-center items-center rounded-full absolute right-0 -mt-12">
              <Image src={search} alt="search" />
            </button>
          </form> */}
          <div className="h-12 w-full pt-2">
            <ul className="flex justify-center items-end gap-8 ">
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/">Home</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/courses">Courses</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/about">About us</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
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
