import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/layout/Layout";
import TeacherCard from "@/components/cards/TeacherCard";
import bluePolcadot from "public/assets/shapes/blue-polcadot.svg";
import { OrganizationDataType } from "data/type";

import fondationManagementData from "data/fondation-management.json";
import professonalColleage from "data/professional-college.json";
import mainTeamData from "data/teams.json";
import remidialData from "data/remidial.json";
import shadowDataTeacher from "data/shadow.json";
import terapisData from "data/terapis.json";

const TeamPage = () => {
  const [fondationData, setFondationData] = useState<OrganizationDataType[]>(
    fondationManagementData
  );
  const [proColleageData, setProColleageData] =
    useState<OrganizationDataType[]>(professonalColleage);
  const [mainTeam, setMainTeam] =
    useState<OrganizationDataType[]>(mainTeamData);
  const [remidialTeachers, setRemidialTeachers] =
    useState<OrganizationDataType[]>(remidialData);
  const [shadowTeachers, setShadowTeachers] =
    useState<OrganizationDataType[]>(shadowDataTeacher);
  const [terapisTeachers, setTerapisTeachers] =
    useState<OrganizationDataType[]>(terapisData);

  return (
    <Layout>
      <div className=" bg-sub-page">
        <Image
          src={bluePolcadot}
          alt="polcadot-shape"
          className="absolute top-12 right-40"
        />
        <div className="container min-h-screen">
          <h1 className="text-center text-primary-text font-bold text-title-sub-page pt-12">
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
              {fondationData.map((data, idx) => (
                <div key={idx}>
                  <TeacherCard
                    name={data.name}
                    image={data.image}
                    jabatan={data.jabatan}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
              <h3 className="text-primary-text text-2xl font-bold text-center ">
                PROFESSIONAL COLLEAGUES
              </h3>
              <div className="h-2 w-8 bg-primary-cyan rounded-lg"></div>
            </div>
            <div className="card-container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-14">
              {proColleageData.map((data, idx) => (
                <div key={idx}>
                  <TeacherCard
                    name={data.name}
                    image={data.image}
                    jabatan={data.jabatan}
                  />
                </div>
              ))}
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
              {mainTeam.map((data, idx) => (
                <div key={idx}>
                  <TeacherCard
                    name={data.name}
                    image={data.image}
                    jabatan={data.jabatan}
                  />
                </div>
              ))}
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
              {terapisTeachers.map((data, idx) => (
                <div key={idx}>
                  <TeacherCard
                    name={data.name}
                    image={data.image}
                    jabatan={data.jabatan}
                  />
                </div>
              ))}
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
              {remidialTeachers.map((data, idx) => (
                <div key={idx}>
                  <TeacherCard
                    name={data.name}
                    image={data.image}
                    jabatan={data.jabatan}
                  />
                </div>
              ))}
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
              {shadowTeachers.map((data, idx) => (
                <div key={idx}>
                  <TeacherCard
                    name={data.name}
                    image={data.image}
                    jabatan={data.jabatan}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
