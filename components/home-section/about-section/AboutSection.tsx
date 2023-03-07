import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import aboutPic from "public/assets/photos/about-pic.svg";
import polcadot from "public/assets/shapes/pink-polcadot.svg";

const AboutSection = () => {
  const router = useRouter();

  return (
    <section className="min-h-[880px] relative flex items-center my-20">
      <div className="absolute w-[80%] h-full bg-secondary-violet right-0"></div>
      <div className="container h-full flex items-center gap-32">
        <div className="z-10">
          <Image src={aboutPic} alt="about-image" />
        </div>
        <div className="relative z-10 h-[500px] w-[485px] flex flex-col justify-center">
          <Image
            src={polcadot}
            alt="polcadot"
            className="absolute top-0 right-0 -z-10"
          />
          <h4 className="font-bold text-primary-text">ABOUT</h4>
          <h1 className="font-bold text-primary-text text-[58px] -mb-[20px]">
            We Are Experts
          </h1>
          <h1 className="font-bold text-primary-text text-[58px]">
            in Elearning
          </h1>
          <p className="my-[23px] text-primary-text">Distant orb has power</p>
          <p className="text-secondary-text ">
            Kami adalah pakar dalam bidang pendidikan dan terapi anak-anak
            berkebutuhan khusus serta pengembangan potensi anak. Sebagai yayasan
            penyedia layanan pendampingan pendidikan dan terapi, kami memiliki
            tenaga profesional terlatih dan berpengalaman untuk membantu
            anak-anak mencapai potensi terbaik mereka.
          </p>
          <button
            className="font-bold text-primary-violet text-[18px] h-[48px] w-[170px] mt-14 bg-[#E5E4F3] rounded-full hover:bg-primary-green hover:text-white duration-75"
            onClick={() => router.push("about")}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
