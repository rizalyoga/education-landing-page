import React from "react";
import Image from "next/image";
import student from "public/assets/shapes/student.svg";
import teacher from "public/assets/shapes/teacher.svg";
import clas from "public/assets/shapes/class.svg";

const TotalSection = () => {
  return (
    <section className="bg-primary-violet">
      <div className="container flex justify-center items-center flex-col min-h-[448px]">
        <div className="w-full flex justify-between ">
          <div className=" bg-primary-cyan p-8 rounded-lg flex justify-center gap-5 min-w-[300px] ">
            <Image src={student} alt="student-logo" />
            <div className="">
              <h1 className="text-white font-bold text-[56px]">124</h1>
              <p className="text-white -mt-5">Student</p>
            </div>
          </div>
          <div className=" bg-primary-pink p-8 rounded-lg flex justify-center gap-5 min-w-[300px] ">
            <Image src={teacher} alt="student-logo" />
            <div className="">
              <h1 className="text-white font-bold text-[56px]">26</h1>
              <p className="text-white -mt-5"> Teachers</p>
            </div>
          </div>
          <div className=" bg-primary-green p-8 rounded-lg flex justify-center gap-5 min-w-[300px] ">
            <Image src={clas} alt="student-logo" />
            <div className="">
              <h1 className="text-white font-bold text-[56px]">6</h1>
              <p className="text-white -mt-5"> Class</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalSection;
