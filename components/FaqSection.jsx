import Image from "next/image";
import DropDown from "./ui/DropDown";

function FaqSection() {
  return (
    <section className="sm:px-20 px-9 w-full lg:px-32 xl:pt-[85px] lg:pt-[85px] pt-[58px] relative">
        <Image
          src="/images/dots4.svg"
          alt="vector"
          width={30}
          height={26}
          className="dots absolute -top-2 right-0 lg:right-32 sm:w-[68px] xl:w-[94px] lg:w-[94px] w-[30px]"
        />
      <div className="title-container w-full relative">

        <div className="first-container w-full justify-between block sm:flex lg:block">
          <div className="big-text flex justify-between lg:justify-start items-center">
            <p>
              <span className="font-montserrat text-[18px]  lg:text-[44px] xl:text-[46px] font-light underline mr-3">
                full
              </span>{" "}
              {""}
              <span className="font-donpoligrafbum text-[20px] sm:text-[36px] lg:text-[50px] xl:text-[56px] font-bold gold-underline text-gold ">
                F.A.Q.{" "}
              </span>
            </p>
            <hr className="w-[30px] lg:w-[81px] h-2 border-black border-t-[8px] sm:border-t-[10[x]] lg:border-t-[18px] sm:mx-5 mr-3 lg:mr-14" />

          <div className="text-line-container w-[30%] sm:w-1/2 lg:w-[50%] flex justify-end lg:justify-start items-center">
            <p className=" hidden sm:block w-[60%] sm:w-[70%] lg:w-[30%]">
              Landing pages & online shops optimized for highe.
            </p>
            <div className="line-container relative w-full sm:w-[30%] lg:w-[60%]">
              <Image
                src="/images/Rectangle 15.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-1 -right-1"
              />
              <hr className="w-[full] border-primary border-t-[1px]   " />
              <Image
                src="/images/Rectangle 15.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-1 -left-1"
              />

            </div>
          </div>
          </div>
            <p className="w-full block sm:hidden text-center">
              Landing pages & online shops optimized for highe.
            </p>
        </div>
        <div className="second-container"></div>
      </div>
      <div className="flex flex-col gap-4 xl:mt-[124px] mt-[40px]">
        <DropDown number={1} />
        <DropDown number={2} />
        <DropDown number={3} />
        <DropDown number={4} />
        <DropDown number={5} />
      </div>
    </section>
  );
}

export default FaqSection;
