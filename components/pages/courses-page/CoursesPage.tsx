import React, { useState } from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";
import pinkPolcadot from "public/assets/shapes/pink-polcadot.svg";
import ShadowTeaching from "@/components/detail-courses/shadow-teacher/ShadowTeaching";
import Therapists from "@/components/detail-courses/therapists/Therapists";
import HomeProgram from "@/components/detail-courses/home-program/HomeProgram";
import RemidialTeaching from "@/components/detail-courses/remidial-teaching/RemidialTeaching";

const CoursesPage = () => {
  const [course, setCourse] = useState<number>(1);

  const setCourseDisplay = (number: number): void => {
    setCourse(number);
  };

  const display = () => {
    switch (course) {
      case 1:
        return <ShadowTeaching />;
      case 2:
        return <Therapists />;
      case 3:
        return <RemidialTeaching />;
      case 4:
        return <HomeProgram />;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="bg-sub-page">
        <Image
          src={pinkPolcadot}
          alt="polcadot-shape"
          className="absolute top-8 left-40"
        />
        <div className="container min-h-screen">
          <h1 className="text-center text-primary-text text-[3rem] font-bold pt-12">
            Our Services
          </h1>
          <div className="my-16">
            <ul className="flex justify-center gap-4">
              <li
                className={`font-semibold cursor-pointer border px-4 py-2 rounded-xl text-primary-text hover:border-primary-text ${
                  course == 1 ? "border-primary-text" : ""
                }`}
                onClick={() => setCourseDisplay(1)}
              >
                Shadow Teacher
              </li>
              <li
                className={`font-semibold cursor-pointer border px-4 py-2 rounded-xl text-primary-text hover:border-primary-text ${
                  course == 2 ? "border-primary-text" : ""
                }`}
                onClick={() => setCourseDisplay(2)}
              >
                Therapists
              </li>
              <li
                className={`font-semibold cursor-pointer border px-4 py-2 rounded-xl text-primary-text hover:border-primary-text ${
                  course == 3 ? "border-primary-text" : ""
                }`}
                onClick={() => setCourseDisplay(3)}
              >
                Remidial Teaching
              </li>
              <li
                className={`font-semibold cursor-pointer border px-4 py-2 rounded-xl text-primary-text hover:border-primary-text ${
                  course == 4 ? "border-primary-text" : ""
                }`}
                onClick={() => setCourseDisplay(4)}
              >
                Home Program
              </li>
            </ul>
          </div>
          {display()}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
