import React from "react";
import { motion } from "framer-motion";

const Button = ({ styles }) => (
    <motion.button
        initial={{ opacity: 0, translateY: 50 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
        Get Started
    </motion.button>
);

export default Button;
