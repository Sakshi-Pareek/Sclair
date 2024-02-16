import React, { useState } from "react";
import Weblogo from "../assets/images/png/WebLogo.png";
import EngIcon from "../assets/images/png/EngIcon.png";
import HeroCArtoonGroup from "../assets/images/png/CartoonGroup.png";
import { CartIcon, UpdownArrow } from "./Icon";

const HeaderSec = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="bg-heropattern bg-no-repeat md:bg-full bg-cover bg-center relative z-[3]">
        <div className=" absolute w-[100px] h-[100px] rounded-[100px] bg-[#FFF624] blur-[85px] left-[-77px] animate-pulse bottom-0 "></div>
        <div className="backdrop-blur-md bg-[#18181833] border-b-[1.5px] border-b-[#f1f1f129]">
          <div className="container lg:max-w-[1164px] xl:px-3 px-5 mx-auto">
            <nav className="flex items-center justify-between lg:h-[100px] md:h-[80px] sm:h-[70px] h-[60px]">
              <a href="">
                <img
                  src={Weblogo}
                  alt="Weblogo"
                  className="sm:max-w-[170px] max-w-[130px] w-full"
                />
              </a>
              <ul
                className={`${
                  show ? "left-[-100%]" : "left-0"
                } flex max-lg:fixed max-lg:top-0 max-lg:bg-navpattern md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-[7] max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}
              >
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#about"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    About
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#Tokenomics"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Tokenomics
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#Audit"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Audit
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#Roadmap"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Roadmap
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#whitepapper"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    White Paper
                  </a>
                </li>
              </ul>
              <div className="flex items-center sm:gap-5 gap-3">
              <div className="relative group">
                  <div
                    className="flex items-center lg:gap-3 sm:gap-1 gap-[2px] cursor-pointer"
                  >
                    <img
                      src={EngIcon}
                      alt="EngIcon"
                      className="lg:max-w-[32px] ms:max-w-[30px] max-w-[27px] w-full"
                    />
                    <div
                      className="transition-all duration-300 ease-linear group-hover:rotate-[180deg]"
                    >
                      <UpdownArrow />
                    </div>
                  </div>
                  <div className="absolute mt-2 w-24 rounded-md right-0 bg-white focus:outline-none group-hover:visible invisible transition-all duration-300 ease-linear">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black font-medium hover:text-white hover:rounded-md hover:bg-[#cec932] transition-all duration-300 ease-linear"
                    >
                      Spanish
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black font-medium hover:text-white hover:rounded-md hover:bg-[#cec932] transition-all duration-300 ease-linear"
                    >
                      Eng
                    </a>
                  </div>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="lg:hidden w-[28px] h-[20px] relative z-[10] flex justify-between flex-col"
                >
                  <span
                    className={`${
                      show
                        ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                        : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                    }`}
                  ></span>
                  <span
                    className={`${
                      show
                        ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                        : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                    }`}
                  ></span>
                  <span
                    className={`${
                      show
                        ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                        : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                    }`}
                  ></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="relative z-[-1] container lg:max-w-[1164px] lg:px-3 px-5 mx-auto mt-[50px]">
          <h1
            className="font-bold  md:text-[60px] sm:text-[55px] text-[45px] leading-[120%] text-[#F1F1F1] md:mb-4 mb-1 text-center"
            data-aos="zoom-in-up"
          >
            Presale is <span className="text-[#FFF624]">Live</span>
          </h1>
          <p
            className="font-normal leading-[150%] text-[16px] md:mb-[35px] mb-5 text-[#D9D9D9] max-w-[702px] text-center mx-auto"
            data-aos="zoom-in-up"
          >
            Led by the most advanced AI technology, with a unique burn system to
            potentially increase its value significantly. Secure your chance to
            become the next millionaire!
          </p>
          <div data-aos="zoom-in-up">
            <button className="font-bold text-[16px] leading-[24px] text-[#010101] flex items-center gap-2.5 px-6 py-3 bg-[#FFF624] rounded-[10px] mx-auto hover:bg-black group hover:shadow-[0px_6px_15px_0px_#FFF624] hover:text-[#FFF624] transition-all duration-500 ease-linear">
              Buy $Clair <CartIcon />
            </button>
          </div>
          <div className="md:mt-1 mt-5" data-aos="zoom-in-up">
            <img
              src={HeroCArtoonGroup}
              alt="HeroCArtoonGroup"
              className="max-w-[810.54px] w-full mx-auto"
              data-aos="zoom-in-up"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
