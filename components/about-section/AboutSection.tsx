import React from "react";
import Image from "next/image";
import aboutPic from "public/assets/photos/about-pic.svg";
import polcadot from "public/assets/shapes/pink-polcadot.svg";

const AboutSection = () => {
  return (
    <section className="min-h-[880px] relative flex items-center">
      <div className="absolute w-[80%] h-full bg-secondary-violet right-0"></div>
      <div className="container h-full flex items-center gap-32">
        <div className="z-10">
          <Image src={aboutPic} alt="about-image" />
        </div>
        <div className="relative z-10 h-[500px] w-[485px] flex flex-col justify-center">
          <Image
            src={polcadot}
            alt="polcadot"
            className="absolute top-0 right-0 -z-10"
          />
          <h4 className="font-bold text-primary-text">ABOUT</h4>
          <h1 className="font-bold text-primary-text text-[58px] -mb-[20px]">
            We Are Experts
          </h1>
          <h1 className="font-bold text-primary-text text-[58px]">
            in Elearning
          </h1>
          <p className="my-[23px] text-primary-text">Distant orb has power</p>
          <p className="text-secondary-text ">
            What looked like a small patch of purple grass, above five feet
            square, was moving across the sand in their direction. When it came
            near enough he perceived.
          </p>
          <button className="font-bold text-primary-violet text-[18px] h-[48px] w-[170px] mt-14 bg-[#E5E4F3] rounded-full">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
