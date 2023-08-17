"use client";
import React, { useState } from "react";

function DropDown({number}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-[#F4F8F3] ${
        isOpen ? "h-fit rounded-br-[20px] sm:rounded-br-[30px] lg:rounded-br-[40px] " : " rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[40px]"
      } transition-all duration-500 ease-in-out px-[15px] lg:px-[140px] sm:px-[40px] `}
    >
      <div className="title flex items-center w-full  ">
        <div className="flex justify-bestween items-end w-full py-[15px] sm:py-[30px] lg:py-[40px]">
          <p>
            <span className="text-[#CDE1DB] font-donpoligrafbum text-xs sm:text-lg xl:text-[26px] mr-1 sm:mr-3 lg:mr-5 w-[5%] lg:w-[2%]">
              {number}.
            </span>
          </p>
          
          <div className="flex justify-between items-center w-[95%] lg:w-[98%]">
            <span className="font-semibold font-montserrat text-[11px] sm:text-lg xl:text-2xl px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div> </div>
            <p
              className={`${
                isOpen ? "text-black " : "text-[#44937D]"
              } cursor-pointer underline font-semibold text-[8px] sm:text-xs xl:text-2xl `}
            >
              {isOpen ? "LESS" : "MORE"}{" "}
            </p>
          </div>
        </div>
          
          
      </div>
      <div className={`${isOpen ? "block" : "hidden" } font-montserrat text-[10px] sm:text-base xl:text-lg pb-8`}>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <p className="xl:mt-5">
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure
          rationally encounter consequences that are extremely painful. Nor
          again is there anyone who loves or pursues or desires to obtain pain
          of itself, because it is pain, but because occasionally circumstances
          occur in which toil and pain can procure him some great pleasure.
        </p>
      </div>
    </div>
  );
}

export default DropDown;
