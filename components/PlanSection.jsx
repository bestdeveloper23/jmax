import Image from "next/image";
import PackagesSwipper from "./packagesSwiper/PackagesSwipper";
import Plans from "./ui/Plans";
function PlanSection() {
  return (
    <section className="plan-container relative w-full pt-9 sm:pt-20 lg:pt-32 relative">
      <Image
        src="/images/feature.svg"
        alt="featuremark"
        width={94}
        height={81}
        className="absolute w-[188px] h-[90%] -right-5 bottom-5 -z-50 hidden lg:block"
      />
          <Image
            src="/images/golddots.svg"
            alt="dots"
            width={94}
            height={81}
            className="absolute w-[30px] h-6 sm:w-[66px] sm:h-[58px] xl:w-[94px] xl:h-[81px] left-0 lg:left-32 "
          />
      <div className="text-container  w-full xl:h-[185px] flex flex-col items-start xl:flex-row xl:justify-between px-9 sm:px-20 lg:px-32 ">

        <div className="title-container w-full lg:w-[580px] 2xl:w-[680px] flex justify-end lg:justify-between items-start lg:items-start ">

          <hr className="w-[30px] sm:w-[81px] h-2 border-gold border-t-[8px] sm:border-t-[12px] translate-y-3 xl:hidden " />
          <p className="text-gold w-[250px] sm:w-[280px] md:w-[350px] lg:w-fit  flex justify-end font-donpoligrafbum gold-underline text-xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-[56px] sm:leading-[50px] xl:leading-[60px] 2xl:leading-[75px] font-bold text-end lg:-translate-x-10 px-5 md:px-9 ">
            CHOOSE PLAN
          </p>
          <div className="">
            <p className="font-montserrat text-gold text-lg sm:text-[40px] font-light sm:font-thin gold-underline sm:py-2 xl:py-3 2xl:py-5">
              {" "}
              your
            </p>
            <hr className="w-[30px] sm:w-[70px] h-2 border-gold border-t-[8px] sm:border-t-[18px] hidden xl:block translate-y-10 " />
          </div>
        </div>

        <div className="info-container relative z-10 w-full lg:w-1/3 mt-10 xl:mt-0">
          <h2 className="font-donpoligrafbum font-bold text-xl sm:text-4xl xl:text-4xl">
            FEATURES
          </h2>
          <p className="text-sm sm:text-[20px] font-montserrat font-semibold leading-[2rem] mt-3 sm:mt-6 mb-6 sm:mb-9">
            <span className="text-primary green-underline">
              Landing pages & online
            </span>{" "}
            <span>shops optimized for higher</span>{" "}
            <span className="text-primary green-underline">
              conversion rate & more sales
            </span>{" "}
            <br />
            <span>(more clients)</span>
          </p>
        </div>
      </div>
      
      <div className="hidden xl:block px-9 sm:px-20 lg:px-32 ">
        <Plans />

      </div>
      <div className="block xl:hidden pl-9 sm:pl-20 lg:px-32 ">
        <PackagesSwipper />
      </div>
      <div className="w-full absolute top-[300px] overflow-hidden -z-50">
        <div className="waves1 h-[1800px] -left-[200px] w-[calc(100%*1.5)] relative -z-50">
          <Image
            src="/images/wawes.webp"
            alt="wave"
            width={5690}
            height={1800}
            className="absolute w-[calc(100%*1.5)] max-h-[2800px]"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default PlanSection;
