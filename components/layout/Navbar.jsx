// import $ from '../../node_modules/jquery';
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";


const Navbar = () => {
  // $(window).scroll(function () {

  //   if ($(window).scrollTop() + $(window).height() > $('.footer').offset().top) {
  //       alert("footer visible");
  //   } else {
  //       alert("footer invisible");
  //   }
  // });
  return (
    <div className="w-full relative">
      

      <nav className=" lg:h-28 md:h-36 h-14 w-full flex justify-between bg-transparent z-50  fixed px-9 sm:px-20 lg:px-32">
        <div className="h-[98%] w-full bg-black opacity-80 absolute left-0"></div>          
        <div className="logo-container fixed w-4/12 lg:w-2/12 h-14 border-r border-l border-primary left-2/4 -translate-x-1/2 top-0 md:translate-y-9 lg:translate-y-1 z-50">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={157}
              height={87}
              className="m-auto lg:translate-y-3 h-9 md:h-16  sm:h-14 md:translate-y-1 translate-y-3 z-50"
            />
          </div>
        <div className="left-container flex items-center relative w-[43%] lg:w-[40%] lg:h-28 md:h-36 h-14 border-b-[1px] border-b-primary">
          <Image
            src="/images/Rectangle 15.svg"
            alt="rectangle"
            width={7}
            height={7}
            className="absolute -bottom-1 right-[23px] lg:right-28"
          />
          <div className="menu-container w-20 lg:border-r-[1px] border-r-primary ">
            {/* <div className="menu cross menu--1">
              <label>
                <input type="checkbox"/>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="30" className="menu_circle"/>
                  <path className="line--1 menu-path" d="M0 40h62c13 0 6 28-4 18L35 35" />
                  <path className="line--2 menu-path" d="M0 50h70" />
                  <path className="line--3 menu-path" d="M0 60h62c13 0 6-28-4-18L35 65" />
                </svg>
              </label>
            </div> */}
            <Image
              src="/images/menu.svg"
              alt="menu"
              width={38}
              height={26}
              className=""
            />
          </div>
          <p className="text-white font-montserrat font-semibold text-lg hidden lg:block ml-10">
            {" "}
            +1 234 56 78 90
          </p>
        </div>
        <div className="right-container gap-2 flex justify-end relative w-[55%] lg:w-[58%] lg:h-28 md:h-36 h-14 border-b-[1px] border-b-primary">

          <p className="flex justify-end items-center  text-white w-1/2 font-montserrat lg:font-semibold text-[10px] sm:text-lg block lg:hidden">
            {" "}
            +1 234 56 78 90
          </p>
          <div className="buttons-container hidden lg:flex  justify-around xl:w-96 h-28 items-center relative z-30">
            <Link href="#" className="relative z-0 lg:w-5/12">
              <hr className="nav-button h-14 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <Image
                src="/images/get consulting btn.svg"
                alt="button"
                width={170}
                height={54}
                className="w-full"
              />
            </Link>
            <Link href="#" className="lg:w-5/12">
              <Image
                src="/images/order free audit.svg"
                alt="button"
                width={170}
                height={54}
                className="w-full"
              />
            </Link>
          </div>
          <Image
            src="/images/Rectangle 15.svg"
            alt="rectangle"
            width={7}
            height={7}
            className="absolute -bottom-1 right-20 lg:right-80"
          />
        </div>
        {/* <Image
          src="/images/Vector 19.png"
          alt="greenlight"
          width={1098}
          height={593}
          className="green-light absolute top-0 right-0 z-0 w-full"
        /> */}
      </nav>
    </div>
  );
};

export default Navbar;
