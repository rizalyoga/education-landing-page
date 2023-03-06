import React from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";
import pinkPolcadot from "public/assets/shapes/pink-polcadot.svg";

const CoursesPage = () => {
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
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
