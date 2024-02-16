import React, { useState } from "react";
import { AccordianArrow } from "./Icon";
import FaqTopLayer from '../assets/images/png/FaqTopLayer.png'
import FaqBottomLayer from '../assets/images/png/FaqBottomLayer.png'
import LargeQuesMark from '../assets/images/png/BigQuestionMark.png'
import SmallQuesMark from '../assets/images/png/SmallQuestionMark.png'

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "WHAT IS $CLAIR?",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
    {
      title: "Arcu in pellentesque sit odio.",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
    {
      title:
        "Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
    {
      title: "Metus augue dictumst sit amet.",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
    {
      title: "Elementum viverra tellus tincidunt nunc odio at id ipsum.",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
    {
      title: "Sagittis morbi aliquam facilisis ornare lacus tempus massa.",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
    {
      title: "Elementum at dui varius consequat fringilla.",
      content:
        "Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.",
    },
  ];
  return (
    <>
      <div className="bg-faqpattern bg-no-repeat md:bg-full bg-cover bg-center xl:py-[170px] lg:py-[125px] md:py-[110px] sm:pt-[85px] pt-16 sm:pb-24 pb-[72px] relative" id="whitepapper">
      <div className=" absolute w-[100px] h-[100px] opacity-[60%] z-[1] rounded-[100px] bg-[#FFF624] blur-[75px] right-[-25px] animate-pulse bottom-[-4%] "></div>
      <img
          src={FaqTopLayer}
          alt="FaqTopLayer"
          className="w-full absolute top-0 -mt-1"
        />
        <img
          src={FaqBottomLayer}
          alt="FaqBottomLayer"
          className="w-full absolute bottom-0 -mt-1"
        />
        <img
          src={SmallQuesMark}
          alt="SmallQuesMark"
          className="w-full absolute left-[9%] top-[36%] max-w-[197px] lg:block hidden z-[-1]"
        />
        <img
          src={LargeQuesMark}
          alt="LargeQuesMark"
          className="w-full absolute right-[6%] top-[27%] max-w-[295px] lg:block hidden z-[-1]"
        />
        <h4 className="text-[#F1F1F1] md:text-[48px] sm:text-[40px] text-[32px] font-semibold leading-[121%] text-center xl:mb-[40px] lg:mb-8 mb-6" data-aos="zoom-in-up">
          Frequently Asked <span className="text-[#FFF624]">Questions</span>
        </h4>
        <div className="container lg:max-w-[1164px] mx-auto lg:px-3 px-5">
          <div className="max-w-[800px] w-full mx-auto flex flex-col gap-6">
            {accordionData.map((item, index) => (
              <div
                className="border border-[#ffffff3d] rounded-[8px] bg-[#ffffff14] shadow-[0px_8px_25px_0px_rgba(0,0,0,0.13)]"
                key={index} data-aos="zoom-in-up"
              >
                <div
                  className="flex justify-between items-center p-3 cursor-pointer font-normal text-[#A9A9A9]"
                  onClick={() => toggleAccordion(index)}
                >
                  <div
                    className={`${
                      openAccordion === index
                        ? "rounded-tl-[8px] rounded-tr-[8px] font-semibold text-[#F1F1F1]"
                        : "rounded-[8px]"
                    }   text-[#A9A9A9] text-[15px] sm:text-[16px] font-normal leading-[24px] transition-all ease-linear duration-300`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`${
                      openAccordion === index ? " rotate-[180deg]" : ""
                    } transition-all duration-500 ease-linear`}
                  >
                    <AccordianArrow />
                  </div>
                </div>
                <div
                  className={`accordion-content ${
                    openAccordion === index
                      ? "max-h-[510px] scale-100 px-3 pb-3 mt-[-2px]"
                      : "max-h-0 overflow-hidden scale-[0.8] p-0"
                  }   text-[15px] sm:text-[16px] font-normal text-[#A9A9A9] leading-[24px] max-w-[533px] transition-all duration-500 ease-linear`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
