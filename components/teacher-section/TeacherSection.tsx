import React from "react";
import TeacherCard from "../cards/TeacherCard";

const TeacherSection = () => {
  return (
    <section className="min-h-[880px] relative my-20">
      <div className="container">
        <h4 className="text-primary-text font-bold text-center  mb-8">
          TEACHERS
        </h4>
        <h1 className="text-[56px] font-bold text-primary-text text-center mb-[63px]">
          Expert Advisors
        </h1>
        <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
        <div className="flex justify-center items-center mt-16">
          <button className="font-bold text-primary-violet text-[18px] w-[170px] h-[48px] bg-secondary-violet rounded-full hover:bg-primary-green hover:text-white duration-75">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;