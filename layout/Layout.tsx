import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Education Page</title>
      </Head>
      <Navbar />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
