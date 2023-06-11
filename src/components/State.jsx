import React from "react";
import { stats } from "../content";
import style from "../style";
import { motion } from "framer-motion";

const State = () => {
    return (
        <div className={`${style.flexCenter} flex flex-wrap`}>
            {stats.map((stat) => (
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    key={stat.id}
                    className="flex-1 flex justify-start flex-row items-center"
                >
                    <h4 className="font-poppins  font-semibold text-[43px] text-white">
                        {stat.value}
                    </h4>
                    <p className="font-poppins font-normal text-gradient uppercase ml-3">
                        {stat.title}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default State;
