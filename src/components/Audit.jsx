import React from "react";
import AuditTopLayer from "../assets/images/png/AuditTopLayer.png";
import AuditBottomLayer from "../assets/images/png/AuditBottomLayer.png";
import AuditSecure from "../assets/images/png/AuditSecure.png";
import CoinBase from "../assets/images/png/CoinBase.png";

const Audit = () => {
  return (
    <>
      <div className="relative bg-audittpattern bg-no-repeat md:bg-full bg-cover bg-center bg-black" id="Audit">
      <div className=" absolute w-[100px] h-[100px] opacity-[60%] z-[1] rounded-[100px] bg-[#FFF624] blur-[75px] right-[-25px] animate-pulse bottom-[-4%] "></div>
        <img
          src={AuditTopLayer}
          alt="AuditTopLayer"
          className="w-full absolute top-0 -mt-1"
        />
        <img
          src={AuditBottomLayer}
          alt="AuditBottomLayer"
          className="w-full absolute bottom-0 -mt-1"
        />
        <div className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto xl:py-[140px] md:py-[115px] sm:py-[100px] py-[80px]">
          <div className="flex flex-wrap flex-row justify-between lg:gap-0 gap-6 items-center lg:pb-[83px] sm:pb-9 pb-5 border-b border-b-[#FFF624] lg:mb-[49px] sm:mb-9 mb-5">
            <div className="lg:w-[50%] w-full">
              <img
                src={AuditSecure}
                alt="AuditSecure"
                className="max-w-[245px] mx-auto" data-aos="zoom-in-up"
              />
            </div>
            <div className="lg:w-[48%] w-full max-lg:text-center">
              <p className="font-normal sm:text-[20px] text-[16px] leading-[150%] text-[#C1C1C1] sm:mb-2.5 mb-1" data-aos="zoom-in-left">
                Rest easy knowing that $CLAIR is{" "}
              </p>
              <h3 className="text-[#FFF624] md:text-[32px] sm:text-[28px] xs:text-[24px] text-[20px] font-semibold leading-[150%] sm:mb-2.5 mb-1" data-aos="zoom-in-left">
                Fully Audited and 100% Secure.
              </h3>
              <p className="text-[#C1C1C1] sm:text-[20px] text-[16px] leading-[150%] font-normal xl:mb-8 mb-5" data-aos="zoom-in-left">
                Zero Room for Rug Pulls: Invest with Confidence.
              </p>
              <div data-aos="zoom-in-left">
              <button className="font-bold text-[16px] leading-[150%] text-[#010101] px-6 py-[12px] border-none mx-auto bg-[#FFF624] rounded-[10px] hover:bg-black group hover:shadow-[0px_6px_15px_0px_#FFF624] hover:text-[#FFF624] transition-all duration-500 ease-linear">
                Audit
              </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-center xl:gap-24 gap-10">
            <div className="xl:w-[37%] lg:w-[45%] w-full max-lg:text-center">
              <h4 className="font-semibold md:text-[32px] sm:text-[28px] xs:text-[24px] text-[20px] leading-[150%] text-[#F1F1F1] mb-4" data-aos="zoom-in-right">
                Listing on{" "}
                <span className="text-[#FFF624]">Major Exchanges</span>
              </h4>
              <p className="font-normal sm:text-[20px] text-[16px] leading-[150%] text-[#C1C1C1]" data-aos="zoom-in-right">
                Baby Sinclair’s Team is in action to secure the{" "}
                <span className="text-[#FFF624]">$CLAIR</span> listing on major
                exchanges. Exciting milestones ahead.
              </p>
            </div>
            <div className="lg:w-[40%] w-full">
              <img src={CoinBase} alt="CoinBase" className="w-full max-w-[465px] mx-auto" data-aos="zoom-in-up"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audit;
