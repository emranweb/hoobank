import React from "react";
import robot from "../assets/robot.png";
import discount from "../assets/Discount.svg";
import style from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className={`flex justify-between ${style.paddingY}`}>
      <div className={`flex-1 flex flex-col ${style.flexStart}`}>
        <div className="bg-discount-gradient rounded-[10px] py-[6px] px-4 flex items-center space-x-2  max-w-[450px]">
          <div className={`flex items-center${style.paragraph}`}>
            <img src={discount} alt="discount" />
            <span className="text-white">20%</span>
          </div>
          <div className={`${style.paragraph} `}>
            DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="text-[72px] font-semibold text-white">
            The Next <br />
            <span className="text-gradient">Generation</span>
          </h1>
          <div>
            <GetStarted />
          </div>
        </div>
        <h1 className="text-[72px] font-semibold text-white">
          Payment Method.
        </h1>
        <p className={`${style.paragraph} max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${style.flexCenter} relative z-[5]`}>
        <img src={robot} alt="robote" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient" />
      </div>
    </div>
  );
};

export default Hero;
