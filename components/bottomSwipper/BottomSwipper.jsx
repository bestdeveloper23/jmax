"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import "./bottomSwiper.css";
import "swiper/css";

const BottomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <>
      <div className="flex absolute z-50 -left-[1rem] -top-[4rem] sm:top-0 sm:-left-[3rem] lg:-left-[5rem]">
        <Image src="/images/finger.svg" alt="scroll" width={63} height={56} className="finger w-[41px] sm:2-[51px] lg:w-[63px] animate-finger"/>
        <Image
          src="/images/fingerarrow.svg"
          alt="scroll"
          width={43}
          height={56}
          className="absolute -top-1 left-9 rotate-12 w-[20px] sm:2-[31px] lg:w-[43px] animate-pulse"
        />
      </div>
      <Swiper
        loop={true}
        freeMode={true}
        mousewheel={true}
        spaceBetween={15}
        slidesPerView={1.5}
        onActiveIndexChange={handleChange}
        className="!w-full !flex !justify-between"
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1.7,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1.7,
          },
          1024: {
            slidesPerView: 4.5
          }
        }}
      >
        <SwiperSlide className=" !h-96 !bg-white">
          <Image
            src="/images/Group 85.svg"
            alt="icon"
            width={75}
            height={75}
            className=""
          />
          <Image
            src="/images/Vector 8 (1).svg"
            alt="line"
            width={202}
            height={2}
            className="w-1/2 "
          />

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-base lg:text-2xl">01.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-[12px] md:text-lg">
              QUESTIONNAIRE{" "}
            </span>
          </p>
          <p className="text-[13px] md:text-[16px] lg:text-lg font-semibold mt-6 leading-7 ">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className=" !h-96 px-6 !bg-white">
          <Image
            src="/images/Group 86.svg"
            alt="icon"
            width={80}
            height={80}
            className=""
          />
          <Image
            src="/images/Vector 8 (1).svg"
            alt="line"
            width={202}
            height={2}
            className="w-1/2 "
          />

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-base lg:text-2xl">02.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-[12px] md:text-lg">
              wireframe{" "}
            </span>
          </p>
          <p className="text-[13px] md:text-[16px] lg:text-lg font-semibold mt-6 leading-7 ">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className=" !h-96 px-6 !bg-white">
          <Image
            src="/images/Group 87.svg"
            alt="icon"
            width={80}
            height={80}
            className=""
          />
          <Image
            src="/images/Vector 8 (1).svg"
            alt="line"
            width={202}
            height={2}
            className="w-1/2 "
          />

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-base lg:text-2xl">03.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-[12px] md:text-lg">
              copywriting{" "}
            </span>
          </p>
          <p className="text-[13px] md:text-[16px] lg:text-lg font-semibold mt-6 leading-7 ">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className=" !h-96 px-6 !bg-white">
          <Image
            src="/images/Group 87 (1).svg"
            alt="icon"
            width={80}
            height={80}
            className=""
          />
          <Image
            src="/images/Vector 8 (1).svg"
            alt="line"
            width={202}
            height={2}
            className="w-1/2 "
          />

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-base lg:text-2xl">04.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-[12px] md:text-lg">
              FIGMA DESIGN{" "}
            </span>
          </p>
          <p className="text-[13px] md:text-[16px] lg:text-lg font-semibold mt-6 leading-7 ">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className=" !h-96 px-6 !bg-white">
          <Image
            src="/images/Group 87 (2).svg"
            alt="icon"
            width={80}
            height={80}
            className=""
          />
          <Image
            src="/images/Vector 8 (1).svg"
            alt="line"
            width={202}
            height={2}
            className="w-1/2 "
          />

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-base lg:text-2xl">05.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-[12px] md:text-lg">
              VIDEO{" "}
            </span>
          </p>
          <p className="text-[13px] md:text-[16px] lg:text-lg font-semibold mt-6 leading-7 ">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BottomSwiper;
