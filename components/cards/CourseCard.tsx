import React from "react";
import Image from "next/image";
import courseImage from "public/assets/photos/course.svg";

const CourseCard = () => {
  return (
    <div className="h-[480px] bg-secondary-violet rounded-2xl">
      <div className="h-[304px] relative ">
        <Image
          src={courseImage}
          alt="card-image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="p-[31px]">
        <h3 className="font-bold text-primary-text text-[24px]">
          Quantum Computers
        </h3>
        <p className="text-[18px] text-primary-text">Joslin Rodgers</p>
        <div className="mt-[16px] flex justify-end">
          <button className="text-white font-bold text-[18px] bg-primary-green w-[90px] h-[48px] rounded-full right-0">
            $299
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
