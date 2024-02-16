import React from "react";
import SmartContractTopLayer from "../assets/images/png/SmartContractTopLAyer.png";
import TokeTopLayer from "../assets/images/png/TokenomicsTopLayer.png";

const SmartContract = () => {
  return (
    <>
      <div className="relative bg-contractpattern bg-no-repeat md:bg-full bg-cover bg-center bg-black" id="Disclaimer">
      <div className=" absolute w-[100px] h-[100px] opacity-[60%] z-[1] rounded-[100px] bg-[#FFF624] blur-[75px] left-[-77px] animate-pulse bottom-0 "></div>
        <img
          src={SmartContractTopLayer}
          alt="SmartContractTopLayer"
          className="w-full absolute top-0 -mt-1"
        />
        <img
          src={TokeTopLayer}
          alt="TokeTopLayer"
          className="w-full absolute bottom-0 -mt-1"
        />
        <div className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto text-center xl:py-[154px] md:py-[115px] sm:py-[85px] py-16">
          <h2 className="font-semibold md:text-[48px] sm:text-[40px] text-[32px] leading-[120.9%] text-[#F1F1F1] md:mb-6 mb-4" data-aos="zoom-in-up">
            <span className="text-[#FFF624]">$CLAIR</span> Smart Contract
            Address
          </h2>
          <div className="bg-[#ffffff14] max-w-[587px] mx-auto border border-[#ffffff3d] rounded-[10px] flex justify-between sm:mb-8 mb-5" data-aos="zoom-in-up">
            <input
              type="text"
              placeholder="0xFD1929755F73f974648daD00ab491a7C44a00eeD"
              className=" bg-transparent w-full p-[11px] font-normal text-[16px] leading-[150%] text-[#C1C1C1] outline-none"
            />
            <button className="font-bold text-[16px] leading-[150%] text-[#010101] px-6 py-[11px] border-none mx-auto bg-[#FFF624] rounded-[10px] hover:scale-[0.9] transition-all duration-500 ease-linear">
              Copy
            </button>
          </div>
          <p className="font-normal xs:text-[16px] text-[14px] leading-[150%] text-[#A9A9A9] max-w-[805px] mx-auto" data-aos="zoom-in-up">Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
        </div>
      </div>
    </>
  );
};

export default SmartContract;
