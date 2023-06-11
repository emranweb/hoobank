import React from "react";
import { clients } from "../content";
import styles from "../style";
import { motion } from "framer-motion";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
                    >
                        <motion.img
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            src={client.logo}
                            alt="client_logo"
                            className="sm:w-[192px] w-[100px] object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
