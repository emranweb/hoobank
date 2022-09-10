import React from "react";
import style from "../style";
import arrorUp from "../assets/arrow-up.svg";

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] rounded-full hover:cursor-pointer bg-blue-gradient p-[2px]">
      <div
        className={`bg-primary hover:bg-[#000923] w-full h-full rounded-full flex-col ${style.flexCenter}`}
      >
        <div className="flex text-[18px] font-medium items-end">
          <span className="text-gradient">Get</span>
          <img
            className="w-[23px] h-[23px] object-contain"
            src={arrorUp}
            alt="arrow"
          />
        </div>
        <p className="text-gradient text-[18px] font-medium">Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
