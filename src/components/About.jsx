import React, { useState, useEffect } from "react";
import {
  Clock,
  Dicon,
  LineYellow,
  SIcon,
  SquarIcon,
  Ticon,
  Whiteline,
  YellowLine,
} from "./Icon";
import ProgressBar from "../assets/images/png/progressBar.png";
import Dino from "../assets/images/png/dino.png";

const About = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-15") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  return (
    <>
      <div className="bg-black xl:pt-[52px] lg:pt-16 pt-14 mt-[-2px]">
        <div className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto">
          <div
            className="border border-[#ffffff33] rounded-[20px] max-w-[818px] mx-auto bg-aboutpattern bg-full bg-no-repeat bg-center lg:px-10 xs:p-5 p-3 lg:py-[37px] mt-[-2px] xl:mb-[100px] md:mb-[75px] sm:mb-[55px] mb-10"
            data-aos="zoom-in-up"
          >
            <div className="flex flex-wrap-reverse flex-row justify-between md:gap-0 gap-5 items-center">
              <div className="lg:w-[35%] md:w-[38%] w-full flex justify-center items-center flex-col">
                <div className="flex items-center gap-7 mb-4">
                  <div className="max-md:flex max-md:gap-3 max-xs:flex-col max-xs:gap-0">
                    <p className="font-normal text-[16px] leading-[150%] text-[#C1C1C1] mb-1">
                      1 $Clair
                    </p>
                    <p className="font-bold text-[16px] text-[#FFF624] leading-[150%]">
                      0.00387 $
                    </p>
                  </div>
                  <YellowLine />
                  <div className="max-md:flex max-md:gap-3 max-xs:flex-col max-xs:gap-0">
                    <p className="font-normal text-[16px] leading-[150%] text-[#C1C1C1] mb-1">
                      Raised Amount
                    </p>
                    <p className="font-bold text-[16px] text-[#FFF624] leading-[150%]">
                      332,123$
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[14px] justify-center mb-8">
                  <SIcon />
                  <Ticon />
                  <Dicon />
                  <SquarIcon />
                </div>
                <a
                  href=""
                  className="font-bold text-[16px] leading-[150%] text-[#010101] flex justify-center items-center py-3 rounded-[10px] bg-[#FFF624] px-8 hover:bg-black group hover:shadow-[0px_6px_15px_0px_#FFF624] hover:text-[#FFF624] transition-all duration-500 ease-linear"
                >
                  Buy Now
                </a>
              </div>
              <div className="md:w-[55%] w-full">
                <div className="flex items-center justify-between mb-4 xs:px-5 pe-3">
                  <div>
                    <p className="font-normal text-[16px] leading-[150%] text-[#C1C1C1] mb-1">
                      Tokens are Sold
                    </p>
                    <p className="font-bold text-[16px] text-[#FFF624] leading-[150%] flex xs:gap-[18px] gap-2">
                      98,212,738
                      <span className="translate-y-[8px]">
                        <LineYellow />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-[16px] leading-[150%] text-[#C1C1C1] mb-1">
                      Tokens Remaining
                    </p>
                    <p className="font-bold text-[16px] text-[#F1F1F1] leading-[150%] flex xs:gap-[18px] gap-2">
                      80,212,738
                      <span className="translate-y-[8px]">
                        <Whiteline />
                      </span>
                    </p>
                  </div>
                </div>
                <img
                  src={ProgressBar}
                  alt="ProgressBar"
                  className="-mt-3 mb-1.5"
                />
                <p className="font-normal text-[14px] leading-[150%] text-[#A9A9A9] mb-[17px]">
                  Purchase $Clair fast until the price increase.
                </p>
                <div className="flex items-center justify-between max-xs:flex-col max-xs:gap-3">
                  <div className="flex items-center lg:gap-2.5 xs:gap-1.5 gap-3">
                    <Clock />
                    <p className="font-normal text-[16px] text-[#F1F1F1] leading-[130%] xs:max-w-[80px] ">
                      Price increase in
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-center">
                      <p className="text-[#A9A9A9] text-[14px] leading-[130%] font-normal mb-[2px]">
                        Days
                      </p>
                      <p className="flex justify-center items-center h-[40px] lg:w-[50px] md:w-[40px] w-[50px] bg-[#3B380B] text-[#F1F1F1] font-normal xs:text-[24px] text-[20px] leading-[150%] rounded-[4px]">
                        {timeLeft.days}
                      </p>
                    </div>
                    <p className="text-[#87855B] mt-5 font-bold mx-2 text-[20px]">
                      :
                    </p>
                    <div className="text-center">
                      <p className="text-[#A9A9A9] text-[14px] leading-[130%] font-normal mb-[4px]">
                        Hours
                      </p>
                      <p className="flex justify-center items-center bg-[#3B380B] text-[#F1F1F1] font-normal xs:text-[24px] text-[20px] leading-[150%] rounded-[4px] h-[40px] lg:w-[50px] md:w-[40px] w-[50px]">
                        {formatTime(timeLeft.hours)}
                      </p>
                    </div>
                    <p className="text-[#87855B] mt-5 font-bold mx-2 text-[20px]">
                      :
                    </p>
                    <div className="text-center">
                      <p className="text-[#A9A9A9] text-[14px] leadin-[130%] font-normal mb-[2px]">
                        Mins
                      </p>
                      <p className="flex justify-center items-center bg-[#3B380B] text-[#F1F1F1] font-normal xs:text-[24px] text-[20px] leading-[150%] rounded-[4px] h-[40px] lg:w-[50px] md:w-[40px] w-[50px]">
                        {formatTime(timeLeft.minutes)}
                      </p>
                    </div>
                    <p className="text-[#87855B] mt-5 font-bold mx-2 text-[20px]">
                      :
                    </p>
                    <div className="text-center">
                      <p className="text-[#A9A9A9] text-[14px] leadin-[130%] font-normal mb-[2px]">
                        Secs
                      </p>
                      <p className="flex justify-center items-center bg-[#3B380B] text-[#F1F1F1] font-normal xs:text-[24px] text-[20px] leading-[150%] rounded-[4px] h-[40px] lg:w-[50px] md:w-[40px] w-[50px]">
                        {formatTime(timeLeft.seconds)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center relative xl:pb-14 pb-10 z-0 xl:overflow-hidden"
            id="about"
          >
            <img
              src={Dino}
              alt="Dino"
              className="xl:max-w-[284px] max-w-[200px] w-full absolute xl:right-28 right-0 z-[-1]"
            />
            <h2
              className="font-semibold md:text-[48px] sm:text-[40px] text-[32px] leading-[120.9%] text-[#F1F1F1] md:mb-4 mb-3"
              data-aos="zoom-in-up"
            >
              About <span className="font-bold text-[#FFF624]">$CLAIR</span>
            </h2>
            <p
              className="font-normal xs:text-[16px] text-[14px] leading-[150%] text-[#A9A9A9] max-w-[776px] mx-auto mb-3"
              data-aos="zoom-in-up"
            >
              As you navigate through the avatars, you'll find each one has a
              unique voice, bringing laughter and a touch of sarcasm to the
              otherwise serious discussions in the crypto space.
            </p>
            <p
              className="font-normal xs:text-[16px] text-[14px] leading-[150%] text-[#A9A9A9] max-w-[764px] mx-auto mb-3"
              data-aos="zoom-in-up"
            >
              In a landscape where tensions can run high, Baby Sinclair’s memes
              serve as a reminder that, sometimes, the best way to confront
              challenges is with a good laugh.
            </p>
            <p
              className="font-normal xs:text-[16px] text-[14px] leading-[150%] text-[#A9A9A9] max-w-[856px] mx-auto md:mb-8 mb-4"
              data-aos="zoom-in-up"
            >
              In this meme-driven world, laughter is not just a reaction; it's a
              powerful tool for change, and Baby Sinclair is wielding it with
              style. The bad players better watch out; the crypto defender is
              here, armed with memes and ready to act.
            </p>
            <div data-aos="zoom-in-up">
              <button className="font-bold text-[16px] leading-[150%] text-[#010101] px-6 py-3 mx-auto bg-[#FFF624] rounded-[10px] hover:bg-black group hover:shadow-[0px_6px_15px_0px_#FFF624] hover:text-[#FFF624] transition-all duration-500 ease-linear">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
