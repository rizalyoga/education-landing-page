import React from "react";
import Link from "next/link";
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
            <div className="text-white mt-12">
              <h4 className=" font-bold text-2xl">Our Services</h4>
              <ul className="mt-8 text-lg">
                <li className="mb-4 hover:underline">
                  <Link href="courses">Shadow Teacher</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="courses">Therapists</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="courses">Remidial Teaching</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="courses">Home Program</Link>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h1 className="font-bold text-title-sub-page text-white ">
                Athalia&apos;s Blessing
              </h1>
              <p className="text-white leading-8 mb-6 text-lg">
                Yayasan Athalia Berkat Anugrah (Athalia&apos;s Blessing
                Surabaya)
              </p>
              <ul className="flex gap-4">
                <li className="bg-primary-green  p-4 w-12 rounded-full flex justify-center items-center hover:bg-primary-pink duration-75">
                  <a
                    href="https://www.facebook.com/profile.php?id=100073810594481"
                    target="blank"
                  >
                    <Image src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="bg-primary-green  p-4 w-12 rounded-full flex justify-center items-center hover:bg-primary-pink duration-75">
                  <a href="#">
                    <Image src={twiter} alt="twitter" />
                  </a>
                </li>
                <li className="bg-primary-green  p-4 w-12 rounded-full flex justify-center items-center hover:bg-primary-pink duration-75">
                  <a
                    href="https://www.instagram.com/athaliasblessing/"
                    target="blank"
                  >
                    <Image src={instagram} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mb-[42px]" />
          <div className="flex justify-between mb-[42px] text-white">
            <div>
              <p>Copyright © 2023 Education. Athalia&apos;s Blessing.</p>
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
