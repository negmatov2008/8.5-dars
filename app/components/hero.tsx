import React from "react";
import Card from "./Card";

function Hero() {
  return (
    <div className="flex pt-[20px] bg-[#F2F2F2] flex-col px-[26px]">
      <div className="flex flex-col mb-[25px]">
        <h1 className=" text-[#458BD1] font-[700] text-[24px] ">
          Квартира на сутки в Минске
        </h1>
        <img width={197} height={20} src="text.png" alt="" />
      </div>
      <div className="flex justify-between mb-[18px] items-center">
        <div className="flex gap-[7px] items-center ">
          <span className="text-[rgba(33,_26,_29,_0.60)] text-[14px]">
            Сначала <strong className="text-[#458BD1]">новые</strong>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M0.625 1.37988L5.625 6.37988L10.625 1.37988"
              stroke="#458BD1"
              stroke-width="1.4"
            />
          </svg>
        </div>
        <img width={170} height={30} src="btn.svg" alt="" />
      </div>
      <div className="flex flex-col gap-[30px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <Card key={n} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
