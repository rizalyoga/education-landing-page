import React, { useState } from "react";
import Image from "next/image";
import polcadot from "public/assets/shapes/pink-polcadot.svg";
import { addNewStudent } from "@/data/addNewStudent";

const ContactSection = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,
      course,
      message,
    };

    addNewStudent(data).then((e) => {
      if (e.includes("berhasil")) {
        setCourse("");
        setEmail("");
        setName("");
        setMessage("");
        setPhone("");

        alert(e);
      } else {
        alert("Maaf terjadi kesalahan");
      }
    });
  };

  return (
    <section className="min-h-[880px] my-20 relative" id="register">
      <div className="absolute w-[80%] h-full bg-secondary-violet -z-10 "></div>
      <div className="container h-full">
        <div className="h-full flex items-center gap-24 min-h-screen">
          <div className="basis-[35%]">
            <h4 className="font-bold text-primary-text">REGISTER</h4>
            <h2 className="font-bold text-primary-text text-title-section my-4">
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
            <form
              onSubmit={handleSubmit}
              className="relative min-w-[570px] min-h-[560px] rounded-3xl bg-primary-violet"
            >
              <div className="relative flex flex-col w-full p-12">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                />
                <input
                  type="text"
                  placeholder="Course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                />
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-3xl px-12 py-4 my-4"
                  rows={4}
                />
                <div className="relative w-full">
                  <input
                    type="submit"
                    value="Submit"
                    className="font-bold text-white bg-primary-green h-12 w-[170px] rounded-full my-4 cursor-pointer  hover:border-2 float-right hover:border-white duration-75"
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
