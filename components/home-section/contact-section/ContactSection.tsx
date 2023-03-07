import React from "react";
import Image from "next/image";
import polcadot from "public/assets/shapes/pink-polcadot.svg";

const ContactSection = () => {
  return (
    <section className="min-h-[880px] my-20 relative" id="register">
      <div className="absolute w-[80%] h-full bg-secondary-violet -z-10 "></div>
      <div className="container h-full">
        <div className="h-full flex items-center gap-24 min-h-screen">
          <div className="basis-[35%]">
            <h4 className="font-bold text-primary-text">REGISTER</h4>
            <h2 className="font-bold text-primary-text text-[56px] my-4">
              Register Now
            </h2>
            <h4 className="text-primary-text">Sky took on a wonderful</h4>
            <p className="text-secondary-text mt-10">
              Kami mengundang Anda untuk bergabung dengan kami dan menikmati
              berbagai keuntungan yang tersedia. Dengan mendaftar, Anda dapat
              memperoleh akses ke layanan pendampingan pendidikan dan terapi,
              serta berbagai program pengembangan potensi anak yang telah kami
              sediakan. Kesempatan untuk membantu anak-anak mencapai potensi
              terbaik mereka menanti Anda. Ayo bergabung dengan kami sekarang!
            </p>
          </div>
          <div className="basis-[65%]">
            <Image
              src={polcadot}
              alt="polcadot"
              className="absolute right-44 mt-24 "
            />
            <form className="relative min-w-[570px] min-h-[560px] rounded-3xl bg-primary-violet">
              <div className="relative flex flex-col w-full p-12">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-full h-12 px-12 my-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-full h-12 px-12 my-4"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-full h-12 px-12 my-4"
                />
                <textarea
                  placeholder="Message"
                  className="rounded-3xl px-12 py-4 my-4"
                  rows={4}
                />
                <div className="relative w-full">
                  <input
                    type="submit"
                    value="Submit"
                    className="font-bold text-white bg-primary-green h-12 w-[170px] rounded-full my-4 cursor-pointer absolute right-0 hover:border-2 hover:border-white duration-75"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
