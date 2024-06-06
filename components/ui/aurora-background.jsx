"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";


export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <main>
            <div
                className={cn(
                    "relative flex overflow-hidden flex-col  h-[100vh] items-center justify-center  bg-lime-300",
                    className
                )}
                {...props}
            >
                <AnimatedGridPattern
                    numSquares={150}
                    maxOpacity={0.5}
                    duration={1}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
                {children}
            </div>
        </main>
    );
};
