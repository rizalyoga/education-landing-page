import React from "react";
import Image from "next/image";
import courseImage from "public/assets/photos/course.svg";
import { CourseDataType } from "../home-section/course-section/CourseSection";

const CourseCard = ({ course, koordinator }: CourseDataType) => {
  return (
    <div className="min-h-[400px] bg-secondary-violet rounded-2xl">
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
        <h3 className="font-bold text-primary-text text-[24px]">{course}</h3>
        <p className="text-[18px] text-primary-text">{koordinator}</p>
        {/* <div className="mt-[16px] flex justify-end">
          <button className="text-white font-bold text-[18px] bg-primary-green w-[90px] h-[48px] rounded-full right-0">
            $299
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
