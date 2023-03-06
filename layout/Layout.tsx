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
        <title>Athalia&apos;s Blessing</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
