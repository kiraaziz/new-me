"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";

export default function GradualSpacing({
    delay = 0,
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
}) {
    return (
        <div className="flex justify-center space-x-1">
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.h1
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: (i * delayMultiple) + delay }}
                        className={cn("drop-shadow-sm ", className)}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.h1>
                ))}
            </AnimatePresence>
        </div>
    );
}
