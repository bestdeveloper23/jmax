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

const MySwiper = () => {
  const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    const current_slide = swiper.slides[swiper.realIndex];
    for(var i=0; i<18; i++) {
      swiper.slides[i].style.borderTopLeftRadius = "0px";
      swiper.slides[i].style.borderBottomRightRadius = "20px";
    }
    current_slide.children[0].style.borderTopLeftRadius = "64px";
    current_slide.children[0].style.borderBottomRightRadius = "0px";
  };
  return (
    <>
    <div className=" w-full">
      <div className="relative scrool  h-36 w-full flex justify-end items-center px-9 md:px-20 lg:px-32">
        <div className="relative w-full flex justify-evenly lg:justify-end items-end md:items-center">
          <div className="w-full md:w-fit md:flex">
            <div className="line relative flex w-full h-20">
              <Image src="/images/Group 159.svg" alt="scroll" width={230} height={6} className="w-[300px] md:w-[380px] lg:w-[600px]"/>
              <div className="absolute flex items-center transition-all duration-500 ease-in-out h-full z-50" style={{left: `${((activeIndex % 9))/(8)*100*0.96}%`,}}>
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
                <span className="text-primary"> {(activeIndex )%9+1}</span>/
                {slideCount/2}
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
        modules={[ Pagination, Scrollbar]}
        loop={true}
        mousewheel={true}
        spaceBetween={10}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        className="h-full "
        id="my_swiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1.1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1.1,
          },
          1024: {
            slidesPerView: 6.5
          }
        }}
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
                className="relative z-10 w-full h-full object-cover  rounded-tl-[60px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
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
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 9 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
          <Image
                src="/images/1port1.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 10 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/2port2.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 11 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/3port3.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 12 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/4port4.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 13 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/5port5.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 14 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/6port6.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        
        <SwiperSlide
          className={`${
            activeIndex == 15 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/7port7.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        
        <SwiperSlide
          className={`${
            activeIndex == 16 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/8port8.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
        
        <SwiperSlide
          className={`${
            activeIndex == 17 ? "active-slide " : "topslide "
          } background-transparent !h-[480px]`}
        >
                    <Image
                src="/images/9port9.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-full h-full object-cover  rounded-br-[20px]"
              />
        </SwiperSlide>
      </Swiper>

    </div>
          </>
  );
};

export default MySwiper;
