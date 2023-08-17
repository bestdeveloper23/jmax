import React from 'react'
import Image from "next/image";

const Plans = () => {
  return (
    <div className="flex w-full justify-between gap-5 background-transparent pt-5 sm:pt-9 lg:pt-20">
      <div className="font-montserrat w-full w-[30%] pb-9 sm:pb-20 lg:pb-32 bg-transparent ">
        <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center justify-center gap-2">
          <div className='h-[100px] flex items-center'>
            <Image
              src="/images/large.svg"
              alt="line"
              width={84}
              height={100}
              className="relative z-10 w-[100px]"
            />
          </div>
          <div className="shadoww text-[#DCEEE9] absolute gap-3 flex justify-evenly left-9 sm:left-1/2 sm:transform sm:-translate-x-1/2 text-[45px] xl:text-[55px] 2xl:text-[80px] font-bold z-0 ">
            <p>L</p>
            <p>A</p>
            <p>R</p>
            <p>G</p>
            <p>E</p>
            
          </div>
          <div className="relative z-10 text-gold text-3xl gap-3 flex justify-evenly sm:text-4xl xl:text-[46px] font-bold ">
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
        <div className="body pb-9 sm:pb-20 w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br-[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
          <div className="flex">
            <Image
              src="/images/time.svg"
              alt="line"
              width={20}
              height={20}
              className="w-[14px] md:w-[20px]"
            />
            <p className="ml-3">
              {" "}
              <span className="text-[10px] xl:text-base">Timeframe:</span>{" "}
              <span className="text-[#44937D] text-sm font-bold ">
                10 - 14 days
              </span>
            </p>
          </div>
          <table className="w-full text-[10px] xl:text-base font-montserrat font-medium mt-[25px]">
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
                <td >
                  <Image
                    src="/images/Vector4242.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className="w-[14px] md:w-[20px]"
                  />
                </td>
                <td className="pl-1 !h-2">custom made design from scratch unlimited revisions </td>
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
                <td className="pl-1">optimized for higher conversion rate</td>
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
          <p className="font-semibold text-[20px] mt-10 ">
            ADVANTAGES OVER COMPETITORS:
          </p>
          <table className="w-full text-[10px] xl:text-[18px] text-[#44937D] font-montserrat font-medium mt-[20px]">
            <tbody>
              <tr className="second-row">
                <td className="w-11 ">
                  <Image
                    src="/images/video.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className="w-[30px] md:2-[36px]"
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
                    className=" w-[30px] md:2-[36px]"
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
                    className="w-[30px] md:2-[36px] "
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
                    className=" w-[30px] md:2-[36px]"
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
                    className=" w-[30px] md:2-[36px]"
                  />
                </td>
                <td className="pl-1"> sales training for your team</td>{" "}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-montserrat w-full w-[30%] pb-9 sm:pb-20 bg-transparent ">
        <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center justify-center gap-2">
          <div className='h-[100px] flex items-center'>
            <Image
              src="/images/medium (2).svg"
              alt="line"
              width={84}
              height={100}
              className="relative z-10 w-[75px] "
            />
          </div>
          
          <div className="shadoww text-[#DCEEE9] absolute gap-3 flex justify-evenly left-9 sm:left-1/2 sm:transform sm:-translate-x-1/2 text-[45px] xl:text-[55px] 2xl:text-[80px] font-bold z-0 ">
            <p>M</p>
            <p>E</p>
            <p>D</p>
            <p>I</p>
            <p>U</p>
            <p>M</p>
          </div>
          <div className="relative z-10 text-gold text-3xl gap-3 flex justify-evenly sm:text-4xl xl:text-[46px] font-bold  ">
            <p>M</p>
            <p>E</p>
            <p>D</p>
            <p>I</p>
            <p>U</p>
            <p>M</p>
          </div>
          <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
            ($3-5K)
          </p>
        </div>
        <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br-[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
          <div className="flex">
            <Image
              src="/images/time.svg"
              alt="line"
              width={20}
              height={20}
              className="w-[14px] md:w-[20px]"
            />
            <p className="ml-3">
              {" "}
              <span className="text-[10px] xl:text-base">Timeframe:</span>{" "}
              <span className="text-[#44937D] text-sm font-bold ">
                7 - 10 days
              </span>
            </p>
          </div>
          <table className="w-full text-[10px] xl:text-base font-montserrat font-medium mt-[25px]">
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
                <td >
                  <Image
                    src="/images/Vector4242.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className="w-[14px] md:w-[20px]"
                  />
                </td>
                <td className="pl-1 !h-2">custom made design from scratch unlimited revisions </td>
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
                <td className="pl-1">optimized for higher conversion rate</td>
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
      </div>
      <div className="font-montserrat w-full w-[30%] pb-9 sm:pb-20 bg-transparent ">
        <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center justify-center gap-2">
          <div className='h-[100px] flex items-center'>
            <Image
              src="/images/small (2).svg"
              alt="line"
              width={168}
              height={160}
              className="relative z-10 w-[60px] xl:w-[75px] "
            />
          </div>
          
          <div className="shadoww text-[#DCEEE9] absolute gap-3 flex justify-evenly left-9 sm:left-1/2 sm:transform sm:-translate-x-1/2 text-[45px] xl:text-[55px] 2xl:text-[80px] font-bold z-0 ">
            <p>S</p>
            <p>M</p>
            <p>A</p>
            <p>L</p>
            <p>L</p>
          </div>
          <div className="relative z-10 text-gold gap-3 flex justify-evenly text-3xl sm:text-4xl xl:text-[46px] font-bold ">
            <p>S</p>
            <p>M</p>
            <p>A</p>
            <p>L</p>
            <p>L</p>
          </div>
          <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
            ($1-3K)
          </p>
        </div>
        <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br-[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
          <div className="flex">
            <Image
              src="/images/time.svg"
              alt="line"
              width={20}
              height={20}
              className="w-[14px] md:w-[20px]"
            />
            <p className="ml-3">
              {" "}
              <span className="text-[10px] xl:text-base">Timeframe:</span>{" "}
              <span className="text-[#44937D] text-sm font-bold ">
                3 - 5 days
              </span>
            </p>
          </div>
          <table className="w-full text-[10px] xl:text-base font-montserrat font-medium mt-[25px]">
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
                <td >
                  <Image
                    src="/images/Vector4242.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className="w-[14px] md:w-[20px]"
                  />
                </td>
                <td className="pl-1 !h-2">custom made design from scratch unlimited revisions </td>
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
                <td className="pl-1">optimized for higher conversion rate</td>
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
      </div>
    </div>
  );
}

export default Plans