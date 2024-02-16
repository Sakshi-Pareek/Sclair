import React from "react";
import TokenArrow from "../assets/images/png/TokenArrow.png";
import TokenChart from "../assets/images/png/TokenChart.png";
import CatIcon from "../assets/images/png/catIcon.png";
import CartoonIcon from "../assets/images/png/CartoonIcon.png";
import YellowOverlay from "../assets/images/png/YellowOverLay.png";
import GradientLayer from "../assets/images/png/GradientLayer.png";
import { PlusIcon } from "./Icon";

const Tokenomics = () => {
  return (
    <>
      <div className="bg-tokenpattern bg-no-repeat md:bg-full bg-cover bg-center xl:pt-[80px] xl:pb-24 md:pb-[60px] md:pt-[50px] pt-8 pb-10 relative mt-[-1px]">
        <div className=" absolute w-[100px] h-[100px] opacity-[60%] z-[1] rounded-[100px] bg-[#FFF624] blur-[75px] right-[-25px] animate-pulse bottom-[-60px] "></div>
        <img
          src={YellowOverlay}
          alt="YellowOverlay"
          className="absolute top-0 left-0 w-full h-full z-0"
        />
        <img
          src={GradientLayer}
          alt="GradientLayer"
          className="absolute top-0 left-0 w-full h-full z-0"
        />
        <div
          className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto relative z-[1]"
          id="Tokenomics"
        >
          <div className="flex flex-wrap flex-row items-center justify-between pb-16">
            <div className="lg:w-[40%] md:w-[46%] w-full max-md:flex justify-center items-center flex-col">
              <h3
                className="font-semibold md:text-[48px] sm:text-[40px] text-[32px] leading-[120.9%] text-[#F1F1F1] lg:mb-4 mb-[12px]"
                data-aos="zoom-in-right"
              >
                Tokenomics
              </h3>
              <p
                className="font-normal sm:text-[24px] text-[20px] leading-[137.95%] text-[#C1C1C1] flex items-center gap-4 lg:mb-4 mb-[12px]"
                data-aos="zoom-in-right"
              >
                Baby Sinclair
                <a
                  href=""
                  className="text-[#FFF624] border-[#fff6243d] border rounded-[6px] bg-[#ffffff0a] py-[4.5px] px-[15.25px]"
                >
                  $Clair
                </a>
              </p>
              <p
                className="text-[16px] font-medium leading-[150%] text-[#C1C1C1] mb-1"
                data-aos="zoom-in-right"
              >
                Total Tokens
              </p>
              <p
                className="font-semibold lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[120%] text-[#FFF624]"
                data-aos="zoom-in-right"
              >
                100,000,000,000
              </p>
              <ul className="ps-0 mb-0 lg:mt-8 mt-[10px] flex flex-col lg:gap-3 gap-[4px]">
                <li
                  className="flex items-center gap-3 font-medium lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] lg:leading-[120%] md:leading-[100%] leading-[120%] text-[#C1C1C1]"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={TokenArrow}
                    alt="TokenArrow"
                    className="w-[36px] h-[36px]"
                  />
                  1%{" "}
                  <sub className="font-normal sm:text-[16px] text-[14px] lg:leading-[120%] md:leading-[100%] leading-[120%]">
                    Presale
                  </sub>
                </li>
                <li
                  className="flex items-center gap-3 font-medium lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] lg:leading-[120%] md:leading-[100%] leading-[120%] text-[#C1C1C1]"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={TokenArrow}
                    alt="TokenArrow"
                    className="w-[36px] h-[36px]"
                  />
                  3%{" "}
                  <sub className="font-normal sm:text-[16px] text-[14px] lg:leading-[120%] md:leading-[100%] leading-[120%]">
                    Marketing
                  </sub>
                </li>
                <li
                  className="flex items-center gap-3 font-medium lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] lg:leading-[120%] md:leading-[100%] leading-[120%] text-[#C1C1C1]"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={TokenArrow}
                    alt="TokenArrow"
                    className="w-[36px] h-[36px]"
                  />
                  5%{" "}
                  <sub className="font-normal sm:text-[16px] text-[14px] lg:leading-[120%] md:leading-[100%] leading-[120%]">
                    Team - locked for 24 months
                  </sub>
                </li>
                <li
                  className="flex items-center gap-3 font-medium lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] lg:leading-[120%] md:leading-[100%] leading-[120%] text-[#C1C1C1]"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={TokenArrow}
                    alt="TokenArrow"
                    className="w-[36px] h-[36px]"
                  />
                  10%{" "}
                  <sub className="font-normal sm:text-[16px] text-[14px] lg:leading-[120%] md:leading-[100%] leading-[120%]">
                    Investors - locked for 24 months
                  </sub>
                </li>
                <li
                  className="flex items-center gap-3 font-medium lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] lg:leading-[120%] md:leading-[100%] leading-[120%] text-[#C1C1C1]"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={TokenArrow}
                    alt="TokenArrow"
                    className="w-[36px] h-[36px]"
                  />
                  21%{" "}
                  <sub className="font-normal sm:text-[16px] text-[14px] lg:leading-[120%] md:leading-[100%] leading-[120%]">
                    Exchange listings & liquidity
                  </sub>
                </li>
                <li
                  className="flex items-center gap-3 font-medium lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] lg:leading-[120%] md:leading-[100%] leading-[120%] text-[#C1C1C1]"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={TokenArrow}
                    alt="TokenArrow"
                    className="w-[36px] h-[36px]"
                  />
                  60%{" "}
                  <sub className="font-normal sm:text-[16px] text-[14px] lg:leading-[120%] md:leading-[100%] leading-[120%]">
                    Rewards and burns
                  </sub>
                </li>
              </ul>
            </div>
            <div className="lg:w-[43.5%] md:w-[47.5%] w-full max-md:flex justify-center">
              <img
                src={TokenChart}
                alt="TokenChart"
                className="max-w-[491px] w-full"
                data-aos="zoom-in-up"
              />
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="max-w-[1140px] mx-auto border border-[#ffffff33] rounded-[16px] md:py-[31px] xl:px-[72px] md:px-7 p-4 bg-[#ffffff0f] flex flex-wrap flex-row items-center justify-between lg:gap-0 md:gap-7 gap-5 hover:scale-[0.95] transition-all duration-300 ease-linear cursor-pointer hover:shadow-[1px_2px_6px_2px_#FFF624]">
              <div className="lg:w-[34%] w-full">
                <div className="flex gap-5 items-center max-lg:justify-center">
                  <img
                    src={CatIcon}
                    alt="CatIcon"
                    className="sm:max-w-[132px] max-w-[100px] w-full"
                  />
                  <PlusIcon />
                  <img
                    src={CartoonIcon}
                    alt="CartoonIcon"
                    className="sm:max-w-[132px] max-w-[100px] w-full"
                  />
                </div>
              </div>
              <div className="xl:w-[58%] lg:w-[61%] w-full">
                <p className="font-semibold sm:text-[20px] text-[16px] leading-[150%] text-[#F1F1F1] mb-2.5 max-lg:text-center">
                  Baby Sinclair Stands Strong with the Shiba Inu Community
                </p>
                <p className="font-normal sm:text-[16px] text-[14px] laeding-[100%] text-[#C1C1C1] max-lg:text-center">
                  10% of every $CLAIR token sold post-presale will be dedicated
                  to burning SHIB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
