import Image from "next/image";

function GuaranteeSection() {
  return (
    <div className="relative w-full sm:h-[346px] xl:h-[548px] lg:h-[548px] h-[223px] flex flex-col justify-start items-center bg-[#F3F8F3] px-9 sm:px-20 lg:px-32 xl:px-32 lg:pt-[65px] xl:pt-[65px] pt-[40px]">

      <div className="relative z-10 w-full flex justify-center">
        <Image
          src="/images/blackdots.svg"
          alt="dots"
          width={94}
          height={81}
          className="absolute left-0 top-0 sm:w-[68px] xl:w-[94px] lg:w-[94px] w-[30px]"
        />
        <Image
          src="/images/badge_back.svg"
          alt="badge"
          width={173}
          height={248}
          className="w-[55px] sm:w-[80px] xl:w-[173px] lg:w-[173px]"
        />
        <Image
          src="/images/badge.svg"
          alt="badge"
          width={110.25}
          height={181.65}
          className="lg:w-[115.25px] xl:w-[110.25px] w-[37px] sm:w-[55px]  translate-x-2 absolute"
        />
      </div>

      <div className="relative flex justify-center">

        <p className="relative text-center w-full lg:w-[88%] text-xs sm:text-[22px] xl:text-4xl leading-[22px] sm:leading-[26.82px] lg:leading-[55px] z-10">
          <span>When you buy a </span>
          {""}
          <span className="text-[#44937D]"> Large / Medium</span> {""}
          <span className="underline">package, we will work with you,</span> {""}
          <span>changing the look of your site</span> {""}
          <span className="underline">
            until the moment it starts making money!
          </span>
        </p> 

      </div>
      <div className="w-full absolute left-0 top-28 overflow-hidden z-10">
        <div className="waves1 h-[500px] w-[3200px] relative z-10">
          <Image
            src="/images/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[500px]"
          />
        </div>
      </div>{" "}
      <div className="flex justify-center absolute bottom-12 z-0">
          <p className="text-[54px] sm:text-[100px] xl:text-[236px] text-[#DEEBE7] font-bold z-0 ">
            GUARANTEE
          </p>
        </div>
    </div>
  );
}

export default GuaranteeSection;
