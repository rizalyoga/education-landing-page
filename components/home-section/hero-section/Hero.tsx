import React from "react";
import Lottie from "react-lottie";
import heroLottie from "public/assets/lottie/data.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="bg-primary-violet flex relative ">
      <div className="container min-h-[700px] flex justify-between items-center h-full text-white ">
        <div className="basis-[40%] z-10">
          <h1 className="text-white font-bold text-title-section leading-tight mb-4 -mt-[70px]">
            Athalia&apos;s Blessing
          </h1>
          <p className="mb-10">
            Kami mendampingi dan memberi terapi bagi anak-anak dan individu yang
            membutuhkan. Mulai dengan guru pendamping di sekolah dan berkembang
            dengan terapi perilaku, remidial teaching, home program, dan asesmen
            khusus. Kami juga menawarkan workshop, konsultasi pembelajaran, dan
            dukungan parenting. Cek layanan kami di sini!
          </p>
          <a
            href="#register"
            className="font-bold text-lg text-white bg-primary-green rounded-full duration-75 px-12 py-2 border-2 border-primary-green hover:border-2 hover:border-white"
          >
            Register
          </a>
        </div>
        <div className="basis-[60%]  flex items-center justify-center ">
          <div className="absolute">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
