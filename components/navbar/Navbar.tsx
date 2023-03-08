import React from "react";
import Image from "next/image";
import search from "public/assets/button-footer/search.svg";
import menu from "public/assets/button-footer/menu.svg";
import Link from "next/link";
import logo from "public/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-primary-violet sticky top-0 w-full z-50 ">
      <div className="container">
        <div className="min-h-[112px] flex justify-between items-center h-full">
          <div className="flex justify-center items-center gap-2">
            <Image src={logo} alt="logo" height={50} />
            <h1 className="font-bold text-title text-white">Athalia&apos;s</h1>
          </div>
          <div className="h-12 w-full pt-3">
            <ul className="flex justify-center items-end gap-8 ">
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/">Home</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/courses">Services</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/teams">Teams</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/about">About Us</Link>
              </li>
              <li className="font-bold text-white text-[20px] hover:text-primary-green duration-75">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="w-12 h-12 bg-white justify-center items-center rounded-full hidden">
              <Image src={menu} alt="menu-button" />
            </button>
            <a
              href="#register"
              className="font-bold text-primary-violet bg-white px-12 py-2 rounded-full my-4 cursor-pointer   hover:bg-primary-green hover:text-white duration-75"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
