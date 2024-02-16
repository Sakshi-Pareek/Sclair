import React from "react";
import { Discord, Telegram, Twitter } from "./Icon";
import OurSocialDino from "../assets/images/png/OurSocialDino.png";

const OurSocials = () => {
  return (
    <>
      <div>
        <div className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto xl:pt-[100px] pt-[50px] realtive z-0" id="Cookies">
          <img
            src={OurSocialDino}
            alt="OurSocialDino"
            className="xl:max-w-[284px] max-w-[200px] w-full absolute xl:right-[9%] right-0 z-[-1]"
          />
          <div className="bg-oursocial bg-no-repeat md:bg-full bg-cover bg-center rounded-[16px] border border-[#fff62445] max-w-[840px] mx-auto lg:pt-[50px] lg:pb-[40px] md:py-7 py-5 px-3 xl:mb-8" data-aos="zoom-in-up">
            <h4 className="font-semibold md:text-[48px] sm:text-[40px] text-[32px] leading-[121%] text-center text-[#F1F1F1] lg:mb-4 sm:mb-0 mb-1" data-aos="zoom-in-up">
              Our <span className="text-[#FFF624]">Socials</span>
            </h4>
            <p className="font-normal text-[16px] leading-[150%] text-[#A9A9A9] text-center" data-aos="zoom-in-up">
              Join us on social media for exclusive giveaways and stay
              connected!
            </p>
            <p className="font-normal sm:text-[20px] text-[16px] leading-[120%] text-center text-[#FFF624] xl:my-8 lg:my-5 my-3" data-aos="zoom-in-up">
              “Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready
              for the Fun!"
            </p>
            <div className="flex items-center justify-center gap-4" data-aos="zoom-in-up">
              <a href="https://discord.com/" target="_blank" className="group">
                <Discord />
              </a>
              <a href="https://discord.com/" target="_blank" className="group">
                <Twitter />
              </a>
              <a href="https://discord.com/" target="_blank" className="group">
                <Telegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSocials;
