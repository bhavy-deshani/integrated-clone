"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Preloader = () => {
    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Image 
                    src="https://www.integratedindia.in/assets/img/integrated_enterprises_india_pvt_ltd.png" 
                    alt="Integrated Enterprises Logo" 
                    width={200} 
                    height={63}
                />
            </motion.div>
        </motion.div>
    );
};

export default Preloader;