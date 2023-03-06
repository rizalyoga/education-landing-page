import React from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import bluePolcadot from "public/assets/shapes/blue-polcadot.svg";

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-sub-page">
        <div className="container ">
          <div className="w-[70%] m-auto">
            <h1 className="text-[3rem] pt-12 pb-10 font-bold text-primary-text text-center">
              Contact Us
            </h1>
            <p className="text-center text-lg">
              Hubungi kami untuk setiap pertanyaan atau bantuan dengan
              pendidikan dan kursus kami. Tim kami siap membantu dan dapat
              dihubungi melalui informasi kontak yang tersedia.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-h-[400px] mt-16 text-primary-text font-bold ">
            <div className="w-full bg-white p-12 flex items-center gap-4 rounded-3xl shadow-lg">
              <HiLocationMarker className="text-2xl" />
              <p>
                Jl. Ngagel Madya V No.17, Baratajaya, Kec. Gubeng, Kota SBY,
                Jawa Timur 60284
              </p>
            </div>
            <div className="w-full bg-white p-12 flex items-center gap-4 rounded-3xl shadow-lg">
              <HiPhone className="text-2xl" />
              <p>+62 815-5540-9479</p>
              <p>+62 858-5321-8883</p>
            </div>
            <div className="w-full bg-white p-12 flex items-center gap-4 rounded-3xl shadow-lg">
              <HiMail className="text-2xl" />
              <p>athaliasblessing@gmail.com</p>
            </div>
            <Image
              src={bluePolcadot}
              alt="polcadot-shape"
              className="absolute top-8 right-40"
            />
          </div>
        </div>
        <div className="mt-16 h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5674955067693!2d112.7594586211365!3d-7.289948522843445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbdf837c46a1%3A0x966fd6285a261142!2sAthalia&#39;s%20Blessing%20Special%20Education!5e0!3m2!1sid!2sid!4v1678075158790!5m2!1sid!2sid"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
