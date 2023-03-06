import React from "react";
import Image from "next/image";
import Layout from "@/layout/Layout";
import TeacherCard from "@/components/home-section/cards/TeacherCard";
import bluePolcadot from "public/assets/shapes/blue-polcadot.svg";

const TeamPage = () => {
  return (
    <Layout>
      <div className=" bg-sub-page">
        <Image
          src={bluePolcadot}
          alt="polcadot-shape"
          className="absolute top-12 right-40"
        />
        <div className="container min-h-screen">
          <h1 className="text-center text-primary-text font-bold text-[3rem] pt-12">
            Organizational Structure
          </h1>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                FOUNDATION MANAGEMENT COMPOSITION
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                FOUNDATION MANAGEMENT COMPOSITION
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              <TeacherCard />
              <TeacherCard />
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                OUR TEAMS
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                THERAPISTS
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                REMIDIAL TEACHERS
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                SHADOW TEACHERS
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
              <TeacherCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
