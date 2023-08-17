"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wolf from "./ui/Wolf";
import AnimatedWaves from "./ui/AnimatedWaves";

const HeadSection = () => {
  return (
    <section className=" h-screen bg-[#121212] px-9 sm:px-20 lg:px-32 overflow-hidden relative">
      <div className="fixed bottom-5 right-5 z-50">
        <Image
          src="/images/upto.png"
          alt="scroll"
          width={50}
          height={50}
          className="scroll-icon hover:cursor-pointer opacity-50 hover:opacity-100"
          onClick={()=>{window.scrollTo({top:0,behavior:'smooth'});}}
        />
      </div>
        <div className="scroll w-9 absolute  left-1/2 bottom-3 md:bottom-9 lg:bottom-5 md:w-[80px] lg:w-[50px] -translate-x-[50%]">
          <Image
            src="/images/Rectangle 1105.svg"
            alt="scroll"
            width={70}
            height={96}
            className="scroll-icon w-full h-full"
          />
          <div className="absolute w-full h-full flex justify-center top-0">

            <Image
              src="/images/Group 156.svg"
              alt="arrow"
              width={15}
              height={50}
              className="left-1/2 animate-bounce w-[20px] md:w-[25px] lg:w-[20px]"
            />
          </div>
        </div>

      <AnimatedWaves />
      <div className="w-full h-screen overflow-hidden relative flex flex-col-reverse xl:flex-row justify-end items-center xl:items-start font-poppins text-white lg:pt-56 ">
        <Image
            src="/images/dots1.svg"
            alt="vector"
            width={94}
            height={81}
            className="dots hidden xl:block absolute bottom-0 left-[20%] z-10"
          />
        <div className="left-container relative h-1/3 md:h-3/7 xl:h-5/6 w-full xl:w-6/12  flex flex-col justify-between xl:mt-12">
          <div className="text-container -top-12 relative h-3/6 md:h-[85%] flex flex-col justify-between xl:mt-0 z-20">
            <p className="text-primary font-montserrat font-semibold text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl ">
              Ние правим
            </p>
            <div className="big-text-container font-donpoligrafbum h-fit sm:h-28 xl:h-44 flex flex-col justify-between text-gold  font-bold text-[15px] sm:text-base md:text-2xl lg:text-3xl xl:text-3xl ">
              <span className="xl:w-[750px] ">ЛЕНДИНГ СТРАНИЦИ</span>
              <span className="xl:w-[750px] translate-x-9 sm:translate-x-14 lg:translate-x-24">
                ОНЛАЙН МАГАЗИНИ
              </span>
              <span>УЕБ САЙТОВЕ</span>
            </div>
            <p className="text-primary font-montserrat text-base sm:text-base lg:text-xl xl:text-2xl xl:font-light max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-[620px] mb-10">
              И можем да се ангажираме с гаранция, че Вашият бизнес, ще започне
              да продава
            </p>
          </div>
          <div className="buttons-container relative w-full h-[40px] sm:h-[55px] xl:w-72 flex lg:hidden justify-between items-center gap-9 sm:gap-20 z-30 ">
            <Link href="#" className="w-6/12">
              <Image
                src="/images/get consulting btn.svg"
                alt="button"
                width={120}
                height={40}
                className="h-full w-full"
              />
            </Link>
            <Link href="#" className="w-6/12">
              <Image
                src="/images/order free audit.svg"
                alt="button"
                width={110}
                height={105}
                className="h-full w-full"
              />
            </Link>
          </div>

        </div>

        <div className="right-container relative xl:-top-24 z-10 h-2/6 xl:h-5/6 flex items-center w-full xl:translate-y-8 xl:w-6/12 mt-28 mb-10 lg:mt-0">
          <div className="wolf-container w-full h-full -translate-y-5 lg:-top-10 flex items-center xl:items-end justify-center overflow-hidden">
            <Wolf/>
            {/* <iframe
              title="Clay Wolf"
              allowFullScreen
              src="https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20230612%2F2947770043234443%2F2947770043234443.glb&autorotate=true&json-data=1686549707993&decrypt=1&tv=147"
              width={920}
              height={850}
              className=" relative  h-[135%] sm:h-[140%] xl:h-[150%] xl:max-h-[950px] top-5 xl:top-40 2xl:top-52 xl:-right-24 z-50"
            >
              {" "}
            </iframe>{" "} */}
          </div>
        </div>

      </div>
      <Image
        src="/images/Vector 18.svg"
        alt="vector"
        width={1667}
        height={566}
        className="green-light absolute -bottom-11 lg:-bottom-40 xl:-bottom-[400px] -left-1 z-0"
      />
      <Image
        src="/images/Vector 19.png"
        alt="greenlight"
        width={1098}
        height={593}
        className="green-light absolute top-0 right-0 z-0"
      />

    </section>
  );
};

export default HeadSection;
