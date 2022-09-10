import React from "react";
import { features } from "../content";
import style, { layout } from "../style";
import Button from "./Button";

const Feature = ({ icon, title, content }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
      <div
        className={`bg-dimBlue w-[64px] h-[64px] rounded-full ${style.flexCenter}`}
      >
        <img src={icon} alt="icon" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins  font-semibold text-white text-[18 mb-1">
          {title}
        </h4>
        <p className="font-poppins text-[16px] font-normal text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};

const Bussiness = () => {
  return (
    <div className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>
          You do the business, <br className="sm:block hidden" /> well handle
          the money.
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-5" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((item, index) => (
          <Feature key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Bussiness;
