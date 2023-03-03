import React from "react";
import Layout from "@/layout/Layout";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import CourseSection from "@/components/course/CourseSection";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        <AboutSection />
        <CourseSection />
      </div>
    </Layout>
  );
};

export default Home;
