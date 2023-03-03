import React from "react";
import CourseCard from "../cards/CourseCard";

const CourseSection = () => {
  return (
    <section className="min-h-[880px] relative my-20">
      <div className="container">
        <h4 className="text-primary-text font-bold text-center  mb-10">
          COURSE
        </h4>
        <h1 className="text-[56px] font-bold text-primary-text text-center mb-[63px]">
          Popular Subjects
        </h1>
        <div className="card-container grid  gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className="flex justify-center items-center mt-20">
          <button className="font-bold text-primary-violet text-[18px] w-[170px] h-[48px] bg-secondary-violet rounded-full">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
