"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";

const Smallswiper = () => {
  const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
    console.log(activeIndex/(slideCount-1))
  };
  return (
    <>
    <div className=" w-full">
      <div className="relative scrool  h-36 w-full flex justify-end items-center px-9 md:px-20 lg:px-32">
        <div className="relative w-full flex justify-evenly lg:justify-end items-end md:items-center">
          <div className="w-full md:w-fit md:flex">
            <div className="line relative flex w-full h-20">
              <Image src="/images/Group 159.svg" alt="scroll" width={230} height={6} className="w-[300px] md:w-[380px] lg:w-[600px]"/>
              <div className="absolute flex items-center transition-all duration-500 ease-in-out h-full z-50" style={{left: `${activeIndex/(slideCount-1)*100*0.96}%`,}}>
                <Image
                  src="/images/Group 160.svg"
                  alt="circle"
                  width={11}
                  height={11}
                  className={`w-[11px] md:w-[20px] lg:w-[27px]`}
                />
              </div>
 
            </div>
          
            <div className="swiper-count flex  gap-10 md:gap-3 justify-center items-center">
              <Image src="/images/arrow.svg" alt="scroll" width={10} height={2} />
              <p className="text-2xl font-medium">
                <span className="text-primary"> {activeIndex + 1}</span>/
                {slideCount}
              </p>
              <Image src="/images/arrowr.svg" alt="arrow" width={10} height={2} />
            </div>
            
          </div>
          
          <div className="md:-left-[2rem] -right-1 absolute lg:relative lg:left-2">
              <Image
                src="/images/finger.svg"
                alt="scroll"
                width={63}
                height={56}
                className="finger w-[41px] sm:2-[51px] lg:w-[63px] animate-finger"
              />
              <Image
                src="/images/fingerarrow.svg"
                alt="scroll"
                width={43}
                height={56}
                className="absolute -top-1 left-9 rotate-12 w-[20px] sm:2-[31px] lg:w-[43px] animate-pulse"
              />
            </div>          
        </div>
      </div>
      <Swiper
        onActiveIndexChange={handleChange}
        modules={[Navigation, Pagination, Scrollbar]}
        loop={true}
        mousewheel={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        className="h-full"
      >
        <SwiperSlide
          className={`${
            activeIndex == 0 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
          <Image
                src="/images/1port1.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 1 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/2port2.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 2 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/3port3.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 3 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/4port4.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 4 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/5port5.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 5 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/6port6.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        
        <SwiperSlide
          className={`${
            activeIndex == 6 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/7port7.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        
        <SwiperSlide
          className={`${
            activeIndex == 7 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/8port8.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
        
        <SwiperSlide
          className={`${
            activeIndex == 8 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/9port9.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px] rounded-tl-[60px]"
              />
        </SwiperSlide>
      </Swiper>

    </div>
          </>
  );
};

export default Smallswiper;
