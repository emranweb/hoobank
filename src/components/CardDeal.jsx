import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <motion.h2
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.heading2}
                >
                    Find a better card deal <br className="sm:block hidden" />{" "}
                    in few easy steps.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${styles.paragraph} max-w-[470px] mt-5`}
                >
                    Arcu tortor, purus in mattis at sed integer faucibus.
                    Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
                    ac, ametau.
                </motion.p>

                <Button styles={`mt-10`} />
            </div>

            <div className={layout.sectionImg}>
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={card}
                    alt="billing"
                    className="w-[100%] h-[100%]"
                />
            </div>
        </section>
    );
};

export default CardDeal;
