import React from "react";

const HomeProgram = () => {
  return (
    <>
      <div className="flex gap-4 min-h-[100px] border-b-2 mb-16">
        <div className="basis-[40%]">
          <h1 className="text-3xl font-bold">HOME PROGRAM (HP)</h1>
        </div>
        <div className="basis-[60%] text-xl">
          <p className="pb-4">
            Program terapi yang dilakukan di rumah maupun di center, bisa juga
            dilakukan oleh orangtua atau orangtua bersama terapis, dan harus
            dijalankan secara terpadu. Home program sangat beragam dan luas,
            bentuknya tidak formal sesuai dengan kebutuhan anak.
          </p>
        </div>
      </div>
      <div className="flex gap-4 min-h-[100px]">
        <div className="basis-[40%]">
          <h1 className="text-3xl font-bold">Curriculum Flow :</h1>
        </div>
        <div className="basis-[60%] text-xl ">
          <p className="border-b-2 min-h-[50px] pt-2">
            Assesmen dari tim ahli (psikolog).
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">
            Hasil Assesmen dari tim konsultan pembelajaran.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">Penentuan Materi</p>
          <p className="border-b-2 min-h-[50px] pt-3">
            Penyusunan rencana program silabus, RPP/RPI, kompetisi anak.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">
            Penentuan prioritas program.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">Pelaksanaan program.</p>
          <p className="border-b-2 min-h-[50px] pt-3">Evaluasi berkala</p>
        </div>
      </div>
      <hr className="mt-10" />
    </>
  );
};

export default HomeProgram;
