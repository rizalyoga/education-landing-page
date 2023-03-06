import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CourseCard from "../../cards/CourseCard";
import polcadot from "public/assets/shapes/pink-polcadot.svg";

const CourseSection = () => {
  const router = useRouter();

  return (
    <section className="min-h-[880px] relative my-20">
      <div className="container">
        <h4 className="text-primary-text font-bold text-center mb-8">COURSE</h4>
        <h1 className="text-[56px] font-bold text-primary-text text-center mb-[63px]">
          Popular Subjects
        </h1>
        <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <Image
            src={polcadot}
            alt="polcadot"
            className="absolute left-44 mt-20 "
          />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className="flex justify-center items-center mt-20">
          <button
            className="font-bold text-primary-violet text-[18px] w-[170px] h-[48px] bg-secondary-violet rounded-full hover:bg-primary-green hover:text-white duration-75"
            onClick={() => router.push("courses")}
          >
            See Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
