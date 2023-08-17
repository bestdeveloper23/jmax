"use client";
import React, { useState } from "react";
import Image from "next/image";
function ContactSection() {
  const [selectedOption, setSelectedOption] = useState("");
  const [agree, setAgree] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='bg-white relative w-full'>
      
      <div className=" absolute justify-center hidden lg:flex items-center left-0 lg:left-[30%] top-[55%]">
        <Image
          src={"/images/vector.svg"}
          width={80}
          height={80}
          alt="vector"
          className="w-[94px]"
        />
      </div>
      <div className="bg-white pt-9 sm:pt-20 xl:pt-32  w-full">
        <div className="bg-white lg:flex w-full pb-5 sm:pb-9 lg:pb-32">
          <div className="lg:w-1/2 lg:pr-9 sm:pr-0 md:pr-0 pt-0 lg:pt-[20px]">

            <div className="big-text text-gold flex justify-between items-center pr-0 pl-9 sm:px-20 lg:pl-32 lg:pr-0" >
              <p>
                <span className="font-montserrat text-[18px] xl:text-[37px] font-light underline ">
                  do
                </span>{" "}
                {""}

              </p>
              <p>
                <span className="font-donpoligrafbum text-[20px] sm:text-[32px] lg:text-[40px] 2xl:text-[45px] font-bold">
                  YOU WANT{" "}
                </span>
              </p>

              <hr className="w-[30px] sm:w-[40px] xl:w-[58px] h-1 border-gold border-t-[7px] sm:border-t-[10px] xl:border-t-[13px] ml-5 xl:ml-5 mr-5 sm:mr-2" />
              <div className="flex justify-end items-center block absolute right-0 top-3 sm:-translate-y-[10px] sm:relative lg:hidden">
                <Image src={"/images/dots4.svg"} width={30} height={30} alt="-" className="w-[30px] sm:w-[68px]"/>
              </div>
            </div>
            <div className="font-montserrat text-base sm:text-lg lg:text-[38px] 2xl:text-4xl w-full mt-3 pr-6 xl:pr-24 pl-9 sm:pl-20 lg:pl-32">
              <p className="text-[#292929]  py-1 sm:py-[0.13vw] ">
                to order a website or</p>
              <p className="pl-2 lg:pl-4 py-1 sm:pb-[2.25vw]">application</p>
              
            </div>

            <div className="absolute left-0 h-[60px] sm:h-[60px] lg:h-20 flex items-center">
              <Image
                src={"/images/Group 40.svg"}
                width={135}
                height={10}
                alt="vector"
                className="w-[60px] sm:w-[100px] lg:w-[135px] h-[30px] sm:h-[15px] lg:h-[10px]"
              />
            </div>

            <div className="relative flex items-center pl-9 sm:pl-20 lg:pl-32 ">

              <div className="sm:text-gold -right-[10%] lg:-right-[12%] text-base sm:text-lg lg:text-[30px] 2xl:text-3xl relative text-[#44937D]">

                <p className="sm:pt-[0.18vw] pt-1">or do you have</p>
                <p className="underline sm:py-[0.12vw] py-1">questions?</p>
              </div>

            </div>
          </div>


          <div className="px-0 lg:w-1/2 text-base sm:text-lg lg:text-[22px] 2xl:text-2xl">
            <div className="relative my-5 lg:mb-0 px-9 sm:px-20 lg:pr-32 lg:pl-0 ">
              
              <div className="absolute right-0 h-[65px] translate-y-[65x] flex items-center hidden lg:block">
               <Image
                  src={"/images/Group 41.svg"}
                  width={135}
                  height={10}
                  alt="vector"
                />
              </div >
              <input
                type="text"
                placeholder="Name"
                className="border-b focus:border-b border-black focus:border-primary w-full py-2 px-2 lg:px-4 lg:py-4 lg:border-0 lg:border-b lg:mb-5 focus:outline-none focus:ring-0
               focus:placeholder:text-primary placeholder:text-black text-[18px] sm:text-lg xl:text-xl 2xl:text-2xl font-montserrat font-semibold "
              />
            </div>
            <div className="mb-5 lg:mb-0  px-9 sm:px-20 lg:pr-32 lg:pl-0 ">
              <input
                type="text"
                placeholder="Phone"
                className="border-b focus:border-b border-black focus:border-primary w-full py-2 px-2 lg:px-4 lg:py-4 lg:border-0 lg:border-b lg:mb-5 focus:outline-none focus:ring-0
               focus:placeholder:text-primary placeholder:text-black text-[18px] sm:text-lg xl:text-xl 2xl:text-2xl font-montserrat font-semibold "
              />
            </div>
            <div className="mb-5 md:mb-9 lg:mb-5 px-9 sm:px-20 lg:pr-32 lg:pl-0 ">
              <input
                type="email"
                placeholder="Email"
                className="border-b focus:border-b border-black focus:border-primary w-full py-2 px-2 lg:px-4 lg:py-4 lg:border-0 lg:border-b lg:mb-5 focus:outline-none focus:ring-0
               focus:placeholder:text-primary placeholder:text-black text-[18px] sm:text-lg xl:text-xl 2xl:text-2xl font-montserrat font-semibold "
              />
            </div>
            <div className="md:gap-x-9 px-9 sm:px-20 lg:pr-32 lg:pl-0 sm:flex items-center mb-3 lg:mb-9">
              <div className="inline-flex items-center w-fit pr-5 lg:pr-9 lg:w-fit my-5" onClick={() => setSelectedOption("dont")}>
                <label
                  className="relative flex cursor-pointer items-center rounded-full mr-3"
                  htmlFor="dont"
                  data-ripple-dark="true"
                >
                  <input
                    id="radio1"
                    name="type"
                    type="radio"
                    checked={selectedOption === "dont"}
                    onChange={() => setSelectedOption("dont")}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-primary transition-all before:absolute before:top-1/2 before:left-1/2 before:block before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:border-primary hover:before:bg-primary checked:border-primary checked:before:bg-primary hover:before:opacity-10"
                  />
                  <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="green"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </div>
                </label>
                <label htmlFor="dont" className="flex cursor-pointer items-center">
                  <span className={`text-[12px] sm:text-base ${selectedOption === "dont" ? "text-primary" : "text-black"
                    }`}>
                    I don{"'"}t have a website
                  </span>
                </label>
              </div>
              <div className="inline-flex items-center w-fit pr-5 lg:pr-9 lg:w-fit" onClick={() => setSelectedOption("do")}>
                <label
                  className="relative flex cursor-pointer items-center rounded-full mr-3"
                  htmlFor="do"
                  data-ripple-dark="true"
                >
                  <input
                    id="raddio1"
                    name="type"
                    type="radio"
                    checked={selectedOption === "do"}
                    onChange={() => setSelectedOption("do")}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  hover:border-primary hover:before:bg-primary text-primary transition-all before:absolute before:top-1/2 before:left-1/2 before:block before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary before:bg-primary hover:before:opacity-10"
                  />
                  <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="green"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8" ></circle>
                    </svg>
                  </div>
                </label>
                <label htmlFor="do">
                  <span className={`text-[12px] sm:text-base ${selectedOption === "do" ? "text-primary" : "text-black"
                    } relative flex cursor-pointer items-center rounded-full`}>
                    I have a website and want to order a review
                  </span>
                </label>
              </div>
            </div>

            <div className="flex lg:flex-row py-5 lg:pt-9 flex-col justify-between  px-9 sm:px-20 lg:pr-32 lg:pl-0 ">
              <div className="inline-flex items-center mb-9">
                <label
                  className="relative flex cursor-pointer items-center rounded-full mr-3"
                  htmlFor="agree"
                  data-ripple-dark="true"
                >
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                    className="flex justify-center before:content[''] peer relative h-5 w-5 cursor-pointer  hover:border-primary hover:before:bg-primary appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-1/2 before:left-1/2 before:block before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                  />
                  <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="current"
                      stroke="current"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
                <label
                  className={`mt-px cursor-pointer flex justify-center select-none text-[12px] sm:text-base ${agree ? "text-primary" : "text-black"}`}
                  htmlFor="agree"
                >
                  I agree to the rules of personal data processing
                </label>
              </div>
              <div className="items-center justify-center flex py-5">
                <button className="rounded-xl hover:border-primary border-2 text-[24px] sm: hover:text-primary lg:py-2 lg:px-12 lg:text-xl relative px-20 py-5 lg:border-2 border-black text-black background-transparent">
                  <div className="absolute -top-3 left-[37%] -translate-x-10  bg-white   flex justify-center items-center w-12 sm:w-9  font-montserrat ">
                    <Image
                      src={"/images/paper.png"}
                      width={20}
                      height={20}
                      alt="paper"
                      className="w-[27px] md:w-[22px]"
                    />
                  </div>

                  SEND
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-gradient-to-r from-[#131c1a] to-[#000302] relative bg-cover rounded-tr-[30px] lg:rounded-tr-[80px] px-9 lg:px-32 h-[40vh] sm:h-[30vh] grid items-center'>
        <Image src={'/images/vector.svg'} width={95} height={82} className='hidden lg:block w-[95px] absolute top-[40px] left-[25%]' alt="-" />
        <Image src={'/images/vector_footer.svg'} width={95} height={82} className='hidden sm:block w-[95px] absolute bottom-0 right-[82px] lg:right-[295px] lg:bottom-[39px] z-50' alt="-" />
        <Image src={'/images/Vector 19.svg'} width={1400} height={180} className='absolute right-0 bottom-0 z-0' alt="-" />
        <div className='flex items-center justify-center pt-9   '>
          <Image src='/images/logo.svg' width={50} height={50} alt="-"  className="w-[50px] lg:w-[60px]"/>
        </div>
        <div className='lg:flex relative justify-between gap-28 justify-between items-center grid-cols-3 lg:flex-row-reverse z-50' >
          <div className='flex items-center justify-center py-5 gap-5 lg:gap-9 text-white font-montserrat sm:relative relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-[12px] sm:text-[16px] xl:text-[22px]'>
            <p>Portfolio</p>
            <p>Prices</p>
            <p>Develop Prcoess</p>
            <p>F.A.Q</p>
          </div>

          {/* <div className='flex 2xl:justify-end xl:justify-end lg:justify-end justify-center items-center gap-5 py-3 xl:w-[16.301rem] lg:w-[16.301rem]'> */}
          <div className='flex 2xl:justify-end xl:justify-end lg:justify-end justify-center items-center gap-5 py-3'>
            <Image src={'/images/fb.png'} height={26} width={26} className="w-[26px] lg:w-[24px]" alt="-" />
            <Image src={'/images/in.png'} height={26} width={26} className="w-[26px] lg:w-[24px]" alt="-" />
            <Image src={'/images/ln.png'} height={26} width={26} className="w-[26px] lg:w-[24px]" alt="-" />
          </div>

          <div className='flex justify-center items-center gap-5 text-[#51c14f] py-3 font-montserrat text-[16px] xl:text-[18px] 2xl:-[30px]'>
            <p>+1 234 67 89</p>
            <p>jmax@mail.com</p>
          </div>


        </div>

      </div>
      <div className='h-[30px] w-full flex justify-evenly lg:justify-center lg:gap-6 bg-black text-[#7D7D7D] py-2 font-normal font-montserrat  text-[12px] sm:text-[16px] xl:text-[14px]'>
        <p>Privacy Policy</p>
        <p>2023 JMAX</p>
        <p>Terms of use</p>
      </div>
    </div>
  )
}

export default ContactSection;