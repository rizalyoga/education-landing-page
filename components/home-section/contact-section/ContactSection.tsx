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
      date: new Date(),
    };

    if (
      data.name === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.course === ""
    ) {
      alert("Silahkan lengkapi data anda");
    } else if (data.name.length < 4) {
      alert("Silahkan cek kembali data anda");
    } else if (!/^\d+$/.test(data.phone) || data.phone.length <= 6) {
      alert("Silahkan cek kembali phone data anda");
    } else {
      addNewStudent(data).then((e) => {
        if (e.includes("berhasil")) {
          setCourse("Choose one");
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
          alert(e);
        } else {
          alert("Maaf terjadi kesalahan");
        }
      });
    }
  };

  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCourse(value);
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
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-full h-12 px-12 my-4"
                  required
                />
                <select
                  onChange={selectChange}
                  className="rounded-full h-12 px-12 my-4"
                >
                  <option defaultValue={"Choose one"}>Choose one</option>
                  <option value="Shadow Teacher">Shadow Teacher</option>
                  <option value="Therapists">Therapists</option>
                  <option value="Remidial Teaching">Remidial Teaching</option>
                  <option value="Home program">Home program</option>
                </select>
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
                    className="font-bold text-white bg-primary-green h-12 w-[170px] rounded-full my-4 cursor-pointer  hover:border-2 float-right hover:border-white duration-75 active:bg-white active:text-primary-green"
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
