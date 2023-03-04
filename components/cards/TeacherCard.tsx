import React from "react";
import Image from "next/image";
import course from "public/assets/photos/about-pic.svg";

const TeacherCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[170px] h-[170px] bg-primary-pink rounded-full z-10 border-4 border-primary-pink ">
        <Image
          src={course}
          alt="teacher-photos"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="min-w-[300px] h-[150px] bg-secondary-violet p-12 rounded-3xl -mt-10">
        <h2 className="font-bold text-primary-text text-[24px]">
          Sujono Tantri
        </h2>
        <h2 className="font-bold text-secondary-text  ">Tuna Wisma</h2>
      </div>
    </div>
  );
};

export default TeacherCard;
