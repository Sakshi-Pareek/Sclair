import React from "react";
import RoadmapArrow from "../assets/images/png/RoadmapArrow.png";
import Phase1Arrow from "../assets/images/png/phase1arrow.png";
import Phase2Arrow from "../assets/images/png/phase2arrow.png";
import Phase3Arrow from "../assets/images/png/phase3arrow.png";

const Roadmap = () => {
  return (
    <>
      <div className="bg-roadmappattern bg-no-repeat md:bg-full bg-cover bg-center bg-black">
        <div
          className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto desktop:pt-16 lg:pt-5 pt-8"
          id="Roadmap"
        >
          <h3
            className="font-semibold md:text-[48px] sm:text-[40px] text-[32px] leading-[121%] text-center text-[#F1F1F1] desktop:mb-[100px] md:mb-[65px] sm:mb-10 mb-6"
            data-aos="zoom-in-up"
          >
            Roadmap
          </h3>
          <div
            className="flex flex-wrap lg:justify-between justify-center md:gap-9 sm:gap-5 gap-4 mb-14"
            data-aos="zoom-in-up"
          >
            <div className="border border-[#fff62445] bg-[#ffffff0f] p-6 rounded-[16px] md:w-[300px] w-full relative lg:translate-y-[53%] hover:scale-[0.95] transition-all duration-300 ease-linear cursor-pointer">
              <h3 className="font-medium md:text-[32px] sm:text-[28px] xs:text-[24px] text-[22px] leading-[150%] text-[#FFFFFF] sm:mb-4 mb-2 ">
                Phase 1
              </h3>
              <ul className="flex flex-col gap-2 ps-6">
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Team Recruitment
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Social Media
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Audit Smart Contract
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Whitepaper
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Presale Launch
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Community Growth
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  AI Avatars Release
                </li>
              </ul>
              <img
                src={Phase1Arrow}
                alt="Phase1Arrow"
                className="absolute bottom-[-55px] left-1/2 -translate-x-1/2 max-w-[25px] w-full lg:block hidden"
              />
            </div>
            <div className="border border-[#fff62445] bg-[#ffffff0f] p-6 rounded-[16px] md:w-[300px] w-full relative lg:translate-y-[20%] hover:scale-[0.95] transition-all duration-300 ease-linear cursor-pointer">
              <h3 className="font-medium md:text-[32px] sm:text-[28px] xs:text-[24px] text-[22px] leading-[150%] text-[#FFFFFF] sm:mb-4 mb-2 ">
                Phase 2
              </h3>
              <ul className="flex flex-col gap-2 ps-6">
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Official Launch
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Burns 5%
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Major DEX & CEX Listings
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Coinmarketcap
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  CoinGecko
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Influencers Marketing
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  More AI Avatars Release
                </li>
              </ul>
              <img
                src={Phase2Arrow}
                alt="Phase2Arrow"
                className="absolute bottom-[-38px] left-1/2 -translate-x-1/2 max-w-[25px] w-full lg:block hidden"
              />
            </div>
            <div className="border border-[#fff62445] bg-[#ffffff0f] p-6 rounded-[16px] md:w-[300px] w-full relative hover:scale-[0.95] transition-all duration-300 ease-linear cursor-pointer">
              <h3 className="font-medium md:text-[32px] sm:text-[28px] xs:text-[24px] text-[22px] leading-[150%] text-[#FFFFFF] sm:mb-4 mb-2">
                Phase 3
              </h3>
              <ul className="flex flex-col gap-2 ps-6">
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Burns (5% quarterly)
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Rewards Program
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Multiple Partnerships
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  Create your own AI Avatar Voiceover.
                </li>
                <li className="text-[#C1C1C1] text-[16px] leading-[150%] font-medium list-disc">
                  AI Metaverse Avatar Play-to-Earn
                </li>
              </ul>
              <img
                src={Phase3Arrow}
                alt="Phase3Arrow"
                className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 max-w-[25px] w-full lg:block hidden"
              />
            </div>
          </div>
        </div>
        <img
          src={RoadmapArrow}
          alt="RoadmapArrow"
          className="w-full 2xl:mt-[-100px] desktop:mt-[-69px] xl:mt-[-15px] lg:block hidden"
          data-aos="zoom-in-up"
        />
      </div>
    </>
  );
};

export default Roadmap;
