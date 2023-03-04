import React from "react";
import Layout from "@/layout/Layout";
import Hero from "@/components/hero-section/Hero";
import AboutSection from "@/components/about-section/AboutSection";
import CourseSection from "@/components/course-section/CourseSection";
import ContactSection from "@/components/contact-section/ContactSection";
import TotalSection from "@/components/total-section/TotalSection";
import TeacherSection from "@/components/teacher-section/TeacherSection";

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
