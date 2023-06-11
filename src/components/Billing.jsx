import React from "react";
import style, { layout } from "../style";
import { bill } from "../assets";
import { motion } from "framer-motion";

const Billing = () => {
    return (
        <motion.div className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[100%] h-[100%] relative z-[5]"
                    src={bill}
                    alt="alt"
                />
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absoulte z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            </div>
            <div className={layout.sectionInfo}>
                <motion.h2
                    initial={{ opacity: 0, translateX: 50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className={style.heading2}
                >
                    Easily control your <br className="sm:block hidden" />{" "}
                    billing & invoicing
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, translateX: 50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${style.paragraph} max-w-[470px] mt-5`}
                >
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                    integer platea placerat.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Billing;
