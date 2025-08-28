"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const StickyScrollSection = ({ features, imageSrc }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start']
    });

    // Map scroll progress to the index of the active feature
    const activeFeatureIndex = useTransform(scrollYProgress, [0, 1], [0, features.length - 1]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side: Scrolling text content */}
                    <div className="relative">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                style={{
                                    opacity: useTransform(activeFeatureIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]),
                                    y: useTransform(activeFeatureIndex, [index - 0.5, index, index + 0.5], [30, 0, -30])
                                }}
                                className="absolute inset-0"
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-accent">{feature.icon}</div>
                                    <div className="ml-4">
                                        <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                                        <p className="text-lg text-text-secondary mt-2">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: Sticky image */}
                    <div className="hidden lg:block relative h-96 w-full rounded-xl shadow-2xl">
                         <Image src={imageSrc} alt="Integrated Features" layout="fill" className="object-cover rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyScrollSection;