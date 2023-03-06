import React from "react";

const Therapists = () => {
  return (
    <>
      <div className="flex gap-4 min-h-[100px] border-b-2 mb-16">
        <div className="basis-[40%]">
          <h1 className="text-3xl font-bold">THERAPY CENTER</h1>
        </div>
        <div className="basis-[60%] text-xl">
          <p className="pb-4">
            Seorang ahli yang bertugas memberikan intervensi perilaku sesuai
            dengan kebutuhan anak berkebutuhan khusus dengan berbagai tingkat
            kesulitan yang dimiliki oleh anak untuk mempercepat proses
            perkembangannya, juga mengembangkan hubungan yang hangat dan erat
            terhadap anak.
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
            Hasil assesmen oleh konsultan terapis.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">
            Penyusunan rencana program terapi sesuai kebutuhan anak.
          </p>
          <p className="border-b-2 min-h-[50px] pt-3">Pelaksanaan program.</p>
          <p className="border-b-2 min-h-[50px] pt-3">Evaluasi berkala.</p>
        </div>
      </div>
      <hr className="mt-10" />
    </>
  );
};

export default Therapists;
