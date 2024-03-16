import React from "react";
import Menyu from "./Menyu";

function Header() {
  return (
    <div className="  md:hidden ">
      <div className="px-[17px] py-[11px] flex justify-between items-center mx-auto bg-[#211A1D] shadow-[0px 8px 10px 0px rgba(0, 0, 0, 0.10)]">
        <img width={34} height={38} src="logo-phone.svg" alt="" />
        <button className="px-[20px] py-[9px] text-[14px] font-[300] rounded-[50px] border-[0.5px] border-white">
          Заявка на подбор
        </button>
        <Menyu />
      </div>
      <div className="w-full px-[15px] pt-[20px] pb-[24px] h-[468px] relative ">
        <img
          width={375}
          height={468}
          src="hero.png"
          className="absolute h-[468px] bg-contain top-0 left-0 -z-20"
          alt=""
        />
        
        <div className="flex mb-[7px] pl-[19px] gap-[8px]  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
          >
            <path
              d="M6.625 0.379883C3.31658 0.379883 0.625 3.13223 0.625 6.51531C0.625 10.7138 5.99441 16.8775 6.22302 17.1378C6.43775 17.3824 6.81264 17.3819 7.02698 17.1378C7.25559 16.8775 12.625 10.7138 12.625 6.51531C12.6249 3.13223 9.93339 0.379883 6.625 0.379883ZM6.625 9.60221C4.96045 9.60221 3.60628 8.21744 3.60628 6.51531C3.60628 4.81318 4.96049 3.42844 6.625 3.42844C8.28952 3.42844 9.64369 4.81322 9.64369 6.51534C9.64369 8.21747 8.28952 9.60221 6.625 9.60221Z"
              fill="#FFDF42"
            />
          </svg>
          <span className="text-[16px] font-[300]">
            Ваш регион <strong className="font-[400] underline">Минск</strong>
          </span>
        </div>
        <div className="flex gap-[19px] pl-[19px] mb-[23px] items-center">
          <span className="text-[24px] font-[500]">Поиск квартир</span>
          <div className="flex gap-[7px] items-center">
            <span className="text-[18px] font-[400]">
              на <strong className="text-[#FFDF42] font-[700]">сутки</strong>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
            >
              <path
                d="M1.625 0.879883L6.625 5.87988L11.625 0.879883"
                stroke="#FFDF42"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <div className="flex mb-[17px] gap-[11px] pl-[19px] items-center text-[18px] font-[400]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M14.0694 2.6582H3.18056C2.32145 2.6582 1.625 3.35465 1.625 4.21376V15.1026C1.625 15.9618 2.32145 16.6582 3.18056 16.6582H14.0694C14.9286 16.6582 15.625 15.9618 15.625 15.1026V4.21376C15.625 3.35465 14.9286 2.6582 14.0694 2.6582Z"
              stroke="#FFDF42"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.7363 1.10254V4.21365"
              stroke="#FFDF42"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.51367 1.10254V4.21365"
              stroke="#FFDF42"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.625 7.3252H15.625"
              stroke="#FFDF42"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Выбрать даты</span>
        </div>
        <div className="flex justify-between mb-[14px] py-[13px] px-[17px] rounded-[60px] border border-[#FFDF42] bg-[#F0F0F0]">
          <span className="text-[#458BD1] text-[20px] font-[500] ">Цена:</span>
          <img width={82} height={19} src="1.svg" alt="" />
          <div className="flex gap-[8px] items-center ">
            <span className="text-[rgba(33,_26,_29,_0.60)] font-[500]">
              BYN
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
            >
              <path
                d="M1.625 1.37988L7.625 8.37988L13.625 1.37988"
                stroke="#211A1D"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <div className="pl-[19px] mb-[30px] flex items-center gap-[11px]">
          <span className="text-[20px] font-[500]">Кол-во комнат:</span>
          <div className="flex gap-[10px]">
            <img width={30} height={30} src="n1.svg" alt="" />
            <img width={30} height={30} src="n2.svg" alt="" />
            <img width={30} height={30} src="n3.svg" alt="" />
            <img width={30} height={30} src="n4.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap mb-[30px] gap-x-[29px] gap-y-[23px] items-center">
          <span className="text-[#FFDF42] font-[300]">
            [5] <strong className="text-[#F0F0F0]">Метро</strong>
          </span>
          <span className="text-[#FFDF42] font-[300]">
            + <strong className="text-[#F0F0F0]"> Тип жилья</strong>
          </span>
          <span className="text-[#FFDF42] font-[300]">
            [10] <strong className="text-[#F0F0F0]">Удобства</strong>
          </span>
          <span className="text-[#FFDF42] font-[300]">
            + <strong className="text-[#F0F0F0]">Район</strong>
          </span>
          <span className="text-[#FFDF42] font-[300]">
            + <strong className="text-[#F0F0F0]">Улица</strong>
          </span>
          <span className="text-[#FFDF42] font-[300]">
            + <strong className="text-[#F0F0F0]">Спальные места</strong>
          </span>
        </div>
        <div className="flex gap-[20px] items-center">
          <button className="py-[14px] px-[65px] rounded-[60px] text-[20px] text-[#211A1D] bg-[#FFDF42]">
            ПОИСК
          </button>
          <span className="text-[14px] max-w-[112px]">Найдено результатов: <strong className="text-[#FFDF42] font-[700]">285</strong></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
