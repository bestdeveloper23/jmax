"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PackagesSwipper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <>
      <div className=" relative w-screen">
        <div className="absolute top-9 md:top-20 -left-[1.5rem] md:-left-[4rem] lg:-left-[5rem] z-50 w-[41px] md:w-[41px]  animate-finger">
          <Image src="/images/finger.svg" alt="scroll" width={63} height={56} />
          <Image
            src="/images/fingerarrow.svg"
            alt="scroll"
            width={43}
            height={56}
            className="absolute -top-1 left-5 sm:left-5 rotate-12 w-[20px] sm:w-[25px] animate-pulse"
          />
        </div>

      </div>
      <div className="swiper-container !w-full flex justify-center">
        <Swiper
          // freeMode={true}
          mousewheel={true}
          spaceBetween={15}
          slidesPerView={1.2}
          onActiveIndexChange={handleChange}
          className=" pb-9 sm:pb-20 !relative !z-30 "
          modules={[Navigation, Pagination, Scrollbar]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1.1,
            },
          }}
        >
          <SwiperSlide className="font-montserrat pb-9 sm:pb-20 !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center justify-center">
              <div className="flex items-center h-[80px] sm:h-[85px]">
                <Image
                  src="/images/large.svg"
                  alt="line"
                  width={84}
                  height={100}
                  className="relative z-10 w-[80px] sm:w-[85px]"
                />
              </div>

              <div className="shadoww text-[#DCEEE9] flex gap-3 justify-center absolute sm:text-[100px] text-[45px] sm:text-[55px] font-bold z-0 ">
                <p>L</p>
                <p>A</p>
                <p>R</p>
                <p>G</p>
                <p>E</p>
              </div>
              <div className="relative z-10 text-gold flex gap-3 justify-center text-3xl sm:text-4xl xl:text-[46px] font-bold ">
                <p>L</p>
                <p>A</p>
                <p>R</p>
                <p>G</p>
                <p>E</p>
              </div>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                ($5-10K)
              </p>
            </div>
            <div className="body min-h-fit pb-9 sm:pb-20 w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
              <div className="flex ml-3">
                <Image
                  src="/images/time.svg"
                  alt="line"
                  width={20}
                  height={20}
                  className="w-[14px] md:w-[20px]"
                />
                <p className="ml-3">
                  {" "}
                  <span className="text-[10px] xl:text-base">
                    Timeframe:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    10 - 14 days
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px] ml-3">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/images/marketing.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">marketing analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/competetors.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">competetors analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/images/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1 !h-2">
                      custom made design from scratch{" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-1 ">unlimited revisions</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/optm (2).svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">
                      optimized for higher conversion rate
                    </td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/seo.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">SEO</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/speed.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">speed optimization</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/anm.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">animated graphics</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/copy.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">copywriting</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold text-[13px] sm:text-[15px] lg:text-[20px] mt-10 ">
                ADVANTAGES OVER COMPETITORS:
              </p>
              <table className="w-full text-[11px] sm:text-[18px] text-[#44937D] font-montserrat font-medium mt-[20px]">
                <tbody>
                  <tr className="second-row">
                    <td className="w-fit ">
                      <Image
                        src="/images/video.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className="w-[26px] md:w-[32px]"
                      />
                    </td>
                    <td className="pl-1 text-left">video presentation</td>{" "}
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/images/organic.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className="w-[26px] md:w-[32px]"
                      />
                    </td>
                    <td className="pl-1">
                      oragnic social media marketing strategy
                    </td>{" "}
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/images/ads.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className="w-[26px] md:w-[32px]"
                      />
                    </td>
                    <td className="pl-1"> graphic design</td>{" "}
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/images/google.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className="w-[26px] md:w-[32px]"
                      />
                    </td>
                    <td className="pl-1"> google ads, paid social ads</td>{" "}
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/images/sales.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className="w-[26px] md:w-[32px]"
                      />
                    </td>
                    <td className="pl-1"> sales training for your team</td>{" "}
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] pb-9 sm:pb-20 !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center justify-center">
              <div className="flex items-center h-[80px] sm:h-[85px]">
              <Image
                src="/images/medium (2).svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-[60px] sm:w-[66px]"
              />
              </div>
              
              <div className="shadoww text-[#DCEEE9] flex gap-3 justify-center absolute sm:text-[100px] text-[45px] sm:text-[55px] font-bold z-0 ">
                <p>M</p>
                <p>E</p>
                <p>D</p>
                <p>I</p>
                <p>U</p>
                <p>M</p>
              </div>
              <div className="relative z-10 text-gold flex gap-3 justify-center text-3xl sm:text-4xl xl:text-[46px] font-bold ">
                <p>M</p>
                <p>E</p>
                <p>D</p>
                <p>I</p>
                <p>U</p>
                <p>M</p>
              </div>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                ($5-10K)
              </p>
            </div>
            <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
              <div className="flex ml-3">
                <Image
                  src="/images/time.svg"
                  alt="line"
                  width={20}
                  height={20}
                  className="w-[14px] md:w-[20px]"
                />
                <p className="ml-3">
                  {" "}
                  <span className="text-[10px] xl:text-base">
                    Timeframe:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    7 - 10 days
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px] ml-3">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/images/marketing.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">marketing analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/competetors.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">competetors analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/images/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1 !h-2">
                      custom made design from scratch{" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-1 ">unlimited revisions</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/optm (2).svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">
                      optimized for higher conversion rate
                    </td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/seo.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">SEO</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/speed.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">speed optimization</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/anm.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">animated graphics</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/copy.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">copywriting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] pb-9 sm:pb-20 !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center justify-center">
              <div className="flex items-center h-[80px] sm:h-[85px]">
              <Image
                src="/images/small (2).svg"
                alt="line"
                width={168}
                height={160}
                className="relative z-10 w-[60px] sm:w-[66px]"
              />
              </div>
              <div className="shadoww text-[#DCEEE9] flex gap-3 justify-center absolute sm:text-[100px] text-[45px] sm:text-[55px] font-bold z-0 ">
                <p>S</p>
                <p>M</p>
                <p>A</p>
                <p>L</p>
                <p>L</p>
              </div>
              <div className="relative z-10 text-gold flex gap-3 justify-center text-3xl sm:text-4xl xl:text-[46px] font-bold ">
                <p>S</p>
                <p>M</p>
                <p>A</p>
                <p>L</p>
                <p>L</p>
              </div>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                ($5-10K)
              </p>
            </div>
            <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
              <div className="flex ml-3">
                <Image
                  src="/images/time.svg"
                  alt="line"
                  width={20}
                  height={20}
                  className="w-[14px] md:w-[20px]"
                />
                <p className="ml-3">
                  {" "}
                  <span className="text-[10px] xl:text-base">
                    Timeframe:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    3 - 5 days
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px] ml-3">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/images/marketing.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">marketing analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/competetors.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">competetors analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/images/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1 !h-2">
                      custom made design from scratch{" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-1 ">unlimited revisions</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/optm (2).svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">
                      optimized for higher conversion rate
                    </td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/seo.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">SEO</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/speed.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1">speed optimization</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/anmgr.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="w-[14px] md:w-[20px]"
                      />
                    </td>
                    <td className="pl-1 text-[#9EB7B0] gray-through">
                      animated graphics
                    </td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/images/copygr.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className="text-gray-950 "
                      />
                    </td>
                    <td className="pl-1 text-[#9EB7B0] gray-through ">
                      copywriting
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full absolute left-0 top-64 overflow-hidden z-10">
        <div className="waves h-[950px] w-[3200px] relative z-10">
          <Image
            src="/images/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[950px]"
          />
        </div>
      </div>

    </>
  );
};

export default PackagesSwipper;
