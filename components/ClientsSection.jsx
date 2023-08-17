import React from "react";
import Image from "next/image";

function ClientsSection() {
  return (
    <section className="clients-container w-full relative h-[333px] sm:h-[470px] xl:h-[620px] overflow-hidden">
      <div className="text-container relative z-10 w-full h-24 flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center xl:justify-between px-9 sm:px-20 xl:px-32 mt-[62px] xl:mt-[92px] ">
        <p className="text-gold flex w-[265px] sm:w-[320px] xl:w-1/2 justify-between items-center sm:ml-0">
          <span className="font-montserrat  gold-underline font-extralight text-lg xl:text-[40px] ">
            our
          </span>{" "}
          <span className="font-donpoligrafbum text-xl sm:text-[26px] font-bold xl:text-[60px] ">
            CLIENTS
          </span>{" "}
          <Image
            src="/images/Rectangle 23.svg"
            alt="client"
            width={30}
            height={8}
            className="sm:w-[30px] xl:w-[81px] xl:h-[16px] "
          />
        </p>
        <Image
          src="/images/Group 25.svg"
          alt="line"
          width={255}
          height={8}
          className="hidden xl:block"
        />
        <div></div>
        <div className="w-full sm:w-fit flex justify-center">
        <p className="text-[#EFF6F4] font-montserrat w-[230px] xl:w-[260px] text-[12px] lg:text-base text-center sm:text-end font-light xl:font-normal ">
          Landing pages & online shops optimized for higher conversion rate &
          more sales (more clients)
        </p>
        </div>
        
      </div>
      <div className="clients-animation-container w-[1157px] sm:w-[2200px] 2xl:w-[2700px] h-9 sm:h-[82px] absolute z-20 bottom-20 xl:bottom-48 -left-96 flex justify-between items-center ">
        <Image
          src="/images/Logo (3).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />

        <Image
          src="/images/Logo (4).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (5).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (4).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (3).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (4).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
      </div>
      <div className="clients-animation-back-container w-[1157px] sm:w-[2200px] 2xl:w-[2700px] h-9 sm:h-[82px] absolute bottom-20 sm:bottom-36 xl:bottom-[260px] -left-96 flex justify-between items-center ">
        <Image
          src="/images/Logo (3).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />

        <Image
          src="/images/Logo (4).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (5).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (4).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (3).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/images/Logo (4).svg"
          alt="client"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
      </div>
      <Image
        src="/images/Vector 18 (1).svg"
        alt="green top"
        fill
        className="absolute top-0 right-0 z-0"
      />
      <Image
        src="/images/Vector 19.svg"
        alt="green bottom"
        fill
        className="absolute bottom-0 left-0 z-0 w-1/12"
      />
      <div className="w-full absolute left-0 top-14 overflow-hidden z-10">
        <div className="waves h-[500px] w-[3200px] relative z-10">
          <Image
            src="/images/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[500px]"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default ClientsSection;
