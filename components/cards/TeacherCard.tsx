import React from "react";
import Image from "next/image";
import { OrganizationDataType } from "@/data/type";

const TeacherCard = ({ name, image, jabatan }: OrganizationDataType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[170px] h-[170px] bg-primary-cyan rounded-full z-10 border-4 border-primary-cyan ">
        <Image
          src={image}
          alt="teacher-photos"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          title={`${name} - ${jabatan}`}
        />
      </div>
      <div className="min-w-[300px] h-[150px] bg-secondary-violet p-12 rounded-3xl -mt-10">
        <h2 className="font-bold text-primary-text text-[24px]">{name}</h2>
        <h2 className="font-bold text-secondary-text">{jabatan}</h2>
      </div>
    </div>
  );
};

export default TeacherCard;
