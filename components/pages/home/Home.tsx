import React from "react";
import Layout from "@/layout/Layout";
import Hero from "@/components/home-section/hero-section/Hero";
import AboutSection from "@/components/home-section/about-section/AboutSection";
import CourseSection from "@/components/home-section/course-section/CourseSection";
import ContactSection from "@/components/home-section/contact-section/ContactSection";
import TotalSection from "@/components/home-section/total-section/TotalSection";
import TeacherSection from "@/components/home-section/teacher-section/TeacherSection";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        <AboutSection />
        <CourseSection />
        <TotalSection />
        <TeacherSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Home;
