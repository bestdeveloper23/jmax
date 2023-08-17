"use client";

import Image from "next/image";
import AnimatedWaves from "./ui/AnimatedWaves";
import MySwiper from "./topSwipper/Swiper";
import { motion, useScroll } from "framer-motion";
import Smallswiper from "./smallswiper/SmallSwiper";

const SecondSection = () => {
  const { scrollYProgress } = useScroll();

  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <div className="font-montserrat w-full mb-9 md:mb-20 lg:mb-24 relative">
      <Image
        src="/images/vline.svg"
        alt="vline"
        width={10}
        height={950}
        className="vline absolute left-[40%] -top-[5%] md:-top-[8%] lg:-top-[15%] sm:-top-[10%] z-0 h-[1100px] md:h-[1000px] lg:h-[120%]"
      />
      <section className="px-9 sm:px-20 lg:px-32   xl:flex xl:justify-between pt-20 md:pt-14 lg:pt-32">
        {/* <section className="px-9 sm:px-20 lg:px-32 pt-16 xl:pt-40 xl:flex xl:justify-between"> */}
        <div className="left-container w-full xl:w-4/12">
          <p className="flex gap-3 lg:gap-4">
            {" "}
            <motion.span
              className="underline text-lg lg:text-4xl font-light font-montserrat"
              initial={{ x: "-100px" }}
              whileInView={{ x: "0px" }}
              transition={{ duration: 2 }}
              // style={{ transform: `translateX(${transformX})` }}
            >
              Нашето
            </motion.span>{" "}
            <motion.span
              className="text-gold font-donpoligrafbum text-xl md:text-3xl lg:text-4xl"
              initial={{ y: "-100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              ПОРТ
            </motion.span>
            <span className="font-black	text-5xl lg:text-8xl relative bottom-8 lg:bottom-[70px] ">
              {" "}
              _
            </span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-gold gold-underline font-donpoligrafbum text-xl w-40 md:text-3xl lg:text-4xl translate-x-40 lg:translate-x-48 -translate-y-5 lg:-translate-y-10"
          >
            ФОЛИО
          </motion.p>
        </div>
        <div className="right-container  w-full xl:w-7/12 xl:pl-9 flex items-start md:items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/images/Group-118.webp"
              alt="logo"
              width={140}
              height={180}
              className="w-[90px] md:w-[90px] lg:w-[140px] "
            />
          </motion.div>
          <motion.p
            initial={{ x: "100px", opacity: 0 }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            className=" underline font-semibold text-base md:text-lg lg:text-[16px] w-full font-montserrat xl:max-w-4xl leading-5 md:leading-5 lg:leading-9"
          >
            Тук нашите конкуренти слагат фейк ревюта от несъществуващи свои
            клиенти.{" "}
            <span className="green-underline text-[#44937D] ">
              Ние не правим така! Вместо това Ви приканваме, да позвъните по
              телефона, на който и да е от нашите клиенти и да ги попитате
              лично, дали са доволни от работата ни.
            </span>
            Всички проекти в нашето портфолио, са с активни линкове към тях.{" "}
          </motion.p>
        </div>
      </section>
      <div className="relative">
        <div className="w-full absolute left-0 top-0 overflow-hidden z-0">
          <div className="waves h-[750px] w-[3200px] relative ">
            <Image
              src="/images/wawes.webp"
              alt="wave"
              width={5690}
              height={100}
              className="absolute w-[5690px] max-h-[750px] "
            />
          </div>
        </div>
      
          <MySwiper />
    
        
      </div>
    </div>
  );
};

export default SecondSection;
