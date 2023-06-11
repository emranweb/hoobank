import React from "react";
import style from "../style";
import arrorUp from "../assets/arrow-up.svg";
import { motion } from "framer-motion";

const GetStarted = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[140px] h-[140px] rounded-full hover:cursor-pointer bg-blue-gradient p-[2px]"
        >
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
        </motion.div>
    );
};

export default GetStarted;
