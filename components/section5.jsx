"use client"
import { motion } from "framer-motion"
import React from 'react';
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function IconCloudDemo() {
    return (
        <div className="section h-full relative">
            <div className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-amber-300 -z-50">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    src="/1.jpg" className="h-full w-1/3 object-cover" alt="Cloud Image" />
                <div className="absolute h-full w-full mx-auto p-10 flex items-center justify-center flex-col ">
                    <div className='w-max flex items-start justify-start flex-col z-10 translate-y-10'>
                        <GradualSpacing
                            duration={1}
                            delay={1}
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-white"
                            text="This world is a pit of cruelty"
                        />
                        <GradualSpacing
                            duration={1}
                            delay={2}
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-white"
                            text="and only one can save it."
                        />
                        <GradualSpacing
                            duration={1}
                            delay={3}
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-white"
                            text="That person is..."
                        />
                        <div className="relative w-full flex items-end justify-end">
                            <div className="absolute top-0 right-0">
                                <GradualSpacing
                                    duration={1}
                                    delay={4}
                                    className="font-display text-center text-4xl font-extrabold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-black opacity-40 blur-md -translate-y-4"
                                    text="KIRA AZIZ"
                                />
                            </div>
                            <div className="absolute top-0 right-0">
                                <GradualSpacing
                                    duration={1}
                                    delay={4}
                                    className="font-display text-center text-4xl font-extrabold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-white -translate-y-4"
                                    text="KIRA AZIZ"
                                />
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ translateY: 400 }}
                        whileInView={{ translateY: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 20 }}

                        className="absolute top-0 right-0 h-full w-full flex items-center justify-center">
                        <div className='w-40 h-80 border-[15px] border-amber-300 blur-lg' />
                    </motion.div>
                    <motion.div
                        initial={{ translateY: 400 }}
                        whileInView={{ translateY: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 20 }}
                        className="absolute top-0 right-0 h-full w-full flex items-center justify-center z-50">
                        <div className='w-40 h-80 border-8 border-r-transparent border-amber-300 ' />
                    </motion.div>
                    <motion.div
                        initial={{ translateY: 400 }}
                        whileInView={{ translateY: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 20 }}
                        className="absolute top-0 right-0 h-full w-full flex items-center justify-center">
                        <div className='w-40 h-80 border-8 border-amber-300 ' />
                    </motion.div>

                </div>
            </div>
        </div >
    );
}
