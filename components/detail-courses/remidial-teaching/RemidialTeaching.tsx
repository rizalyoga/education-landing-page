import React from "react";

const RemidialTeaching = () => {
  return (
    <>
      <div className="flex gap-4 min-h-[100px] border-b-2 mb-16">
        <div className="basis-[40%]">
          <h1 className="text-3xl font-bold">REMIDIAL TEACHING (RT)</h1>
        </div>
        <div className="basis-[60%] text-xl">
          <p className="pb-4">
            Guru Pendamping dalam pengajaran yang berfungsi menolong anak
            berkebutuhan khusus untuk dapat mencapai hasil yang diharapkan.
            Pengajaran perbaikan bersifat khusus karena disesuaikan dengan
            karakteristik kesulitan belajar yang dihadapi anak didik.
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
            Penentuan prioritas cara belajar anak bekerjasama dengan sekolah.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">
            Pelaksanaan pembelajaran sesuai dengan anak.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">Evaluasi berkala</p>
        </div>
      </div>
      <hr className="mt-10" />
    </>
  );
};

export default RemidialTeaching;
