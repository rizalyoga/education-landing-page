import React from "react";
import Image from "next/image";
import twiter from "public/assets/button-footer/twitter.svg";
import facebook from "public/assets/button-footer/facebook.svg";
import instagram from "public/assets/button-footer/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-violet min-h-[450px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex justify-between min-h-[337px] items-center">
            <div className="basis-[25%]">
              <h1 className="font-bold text-[48px] text-white ">
                Athalia&apos;s
              </h1>
              <p className="text-white leading-8 my-6">
                Car seemed to float in the middle of an immense dark sphere,
                whose upper.
              </p>
              <ul className="flex gap-4">
                <li className="bg-primary-green  p-4 w-12 rounded-full flex justify-center items-center hover:bg-primary-pink duration-75">
                  <a href="">
                    <Image src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="bg-primary-green  p-4 w-12 rounded-full flex justify-center items-center hover:bg-primary-pink duration-75">
                  <a href="">
                    <Image src={twiter} alt="twitter" />
                  </a>
                </li>
                <li className="bg-primary-green  p-4 w-12 rounded-full flex justify-center items-center hover:bg-primary-pink duration-75">
                  <a href="">
                    <Image src={instagram} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-white basis-[30%]">
              <h4 className=" font-bold -mt-12 ">Popular Courses</h4>
              <ul className="mt-11">
                <li className="mb-4">
                  <a href="#">Digital Ecosystem Infrastructure</a>
                </li>
                <li>
                  <a href="#">Nutrition, Exercise and Sports</a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col basis-[30%]">
              <h4 className="text-white font-bold mb-4">NEWSLETTER</h4>
              <input
                type="email"
                placeholder="Your Email"
                className="w-[370px] h-[48px] rounded-full p-3"
              />
              <button className="w-[170px] h-[48px] rounded-full bg-primary-green my-[18px] text-white font-bold hover:border-2 hover:border-white duration-75">
                Subsribe
              </button>
            </div>
          </div>
          <hr className="mb-[42px]" />
          <div className="flex justify-between mb-[42px] text-white">
            <div>
              <p>Copyright © 2019 Education. All Rights Reserved.</p>
            </div>
            <div className="flex gap-4">
              <p>Terms of Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
