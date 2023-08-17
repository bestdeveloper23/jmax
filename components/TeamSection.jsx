import Image from "next/image";

function TeamSection() {

  return (
    <section className="team-section-container relative flex flex-col xl:flex-row-reverse xl:justify-between items-end w-full h-[590px] sm:h-[804px] xl:h-[643px] px-9 sm:px-20 lg:px-32 mt-[80px] sm:mt-[100px] xl:mt-[160px] pt-12 xl:pb-[120px] xl:pt-[151px] ">
      <div className="w-full h-full absolute left-0 top-0 grid -translate-y-[15%] sm:-translate-y-[20%] lg:translate-y-0 items-center justify-items-center">
        <Image
          src="/images/team.svg"
          alt="teammark"
          width={94}
          height={81}
          className="w-[80%]"
        />
      </div>
      
      <Image
        src="/images/tlight.svg"
        alt="green top"
        fill
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src="/images/blight.svg"
        alt="green bottom"
        fill
        className="absolute bottom-0 right-0 z-0 "
      />
      <div className="first-container relative z-20 w-[90%] lg:w-[35%] flex xl:flex-col items-end ">
        <div className="first-left-container h-full w-12 xl:w-20 flex xl:hidden flex-col justify-between items-start  ">
          <div className="line-container relative w-[68px] xl:w-[138px] rotate-90 origin-left -translate-x-[20px] md:-translate-x-[30px] -translate-y-5">
            <hr className="w-full border-primary border-t-[1px]" />
            <Image
              src="/images/Rectangle 15.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -bottom-[3px] -left-[2px] "
            />
          </div>
          <p className="-rotate-90 origin-bottom-left text-[10px] sm:text-xs xl:text-base text-secondary w-[130px] xl:w-[209px] ">
            Landing pages & online shops optimized for higher conversion rate
          </p>
        </div>
        <div className="first-right-container  ">
          <div className="big-text text-gold flex justify-end lg:justify-between items-center">
            
            <span className="font-montserrat text-[18px] xl:text-[37px] font-light underline ">
              our
            </span>{" "}
            {""}
            <span className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[33px] 2xl:text-[56px] font-bold gold-underline xl:ml-2 px-3">
              TEAM{" "}
            </span>
            <hr className="w-[30px] sm:w-[40px] xl:w-[58px] h-1 border-gold border-t-[7px] sm:border-t-[10px] xl:border-t-[13px] ml-5 xl:ml-5 " />
          </div>
          <p className="text-secondary text-base sm:text-lg xl:text-[22px] 2xl:text-4xl w-full mt-3 xl:mt-10 text-end lg:text-start font-montserrat">
            of developing products of
          </p>
          <p className="text-secondary text-base sm:text-lg xl:text-[22px] 2xl:text-4xl hidden lg:block text-end font-montserrat">
            varying complexity
          </p>
          <p className="font-montserrat text-[#EFF6F4] text-[10px] font-thin sm:text-sm xl:text-lg mt-3 xl:mt-16">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
        </div>
      </div>
      <div className="second-container xl:max-w-[700px] flex relative z-20 mt-10 xl:mt-0">
        <div className="left-container w-16 hidden xl:flex flex-col justify-between items-start  ">
          <div className="line-container relative w-[40%] xl:w-[138px] rotate-90 origin-left xl:mt-10">
            <hr className="w-full border-primary border-t-[1px]" />
            <Image
              src="/images/Rectangle 15.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -bottom-[3px] -left-[2px] "
            />
          </div>
          <div className="-rotate-90 origin-bottom-left translate-x-16 text-secondary xl:w-[209px] ">
            Landing pages & online shops optimized for higher conversion rate
          </div>
        </div>
        <div className="right-container flex flex-wrap justify-center items-end xl:w-[750px] sm:gap-[35px] gap-[16px]">
          <div className="person-container flex flex-col items-center gap-2">
            <div className="frame lg:w-[140px] lg:h-[140px] h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] flex justify-center items-end justify-items-center">
            {/* hover:w-[120px] hover:h-[120px] hover:cursor-pointer
              hover:lg:w-[150px] hover:lg:h-[150px] hover:w-[60px] hover:h-[60px] */}
              <Image
                src="/images/1.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="lg:w-[74px] hover:lg:w-[140px] hover:cursor-pointer sm:w-[65px] hover:sm:w-[120px] w-[50px] hover:w-[90px]"
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
          <div className="person-container flex flex-col items-center gap-2">
            <div className="frame lg:w-[140px] lg:h-[140px] h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] flex justify-center items-end justify-items-center "
            
             >
              <Image
                src="/images/2.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="lg:w-[74px] hover:lg:w-[140px] hover:cursor-pointer sm:w-[65px] hover:sm:w-[120px] w-[50px] hover:w-[90px] "
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              Anna Wood
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
          <div className="manager-container flex flex-col items-center gap-2">
            <div className="frame lg:w-[140px] lg:h-[140px] h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] flex justify-center items-end justify-items-center ">
              <Image
                src="/images/3.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="lg:w-[74px] hover:lg:w-[140px] hover:cursor-pointer sm:w-[65px] hover:sm:w-[120px] w-[50px] hover:w-[90px] "
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[28px] text-[#EFF6F4] ">
              Mike Green
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-lg">
              Preject Manager
            </p>
          </div>
          <div className="person-container flex flex-col items-center gap-2">
            <div className="frame lg:w-[140px] lg:h-[140px] h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] flex justify-center items-end justify-items-center ">
              <Image
                src="/images/4.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="lg:w-[74px] hover:lg:w-[140px] hover:cursor-pointer sm:w-[65px] hover:sm:w-[120px] w-[50px] hover:w-[90px] "
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
          <div className="person-container flex flex-col items-center gap-2">
            <div className="frame lg:w-[140px] lg:h-[140px] h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] flex justify-center items-end justify-items-center ">
              <Image
                src="/images/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="lg:w-[74px] hover:lg:w-[140px] hover:cursor-pointer sm:w-[65px] hover:sm:w-[120px] w-[50px] hover:w-[90px] "
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              Anna Wood
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute left-0 top-9 overflow-hidden z-0">
        <div className="waves h-[550px] w-[3200px] relative z-0">
          <Image
            src="/images/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[550px]"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default TeamSection;
