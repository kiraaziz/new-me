import IconCloud from "@/components/magicui/icon-cloud";
import { motion } from "framer-motion"
import { AuroraBackground } from "./ui/aurora-background";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "hugginfface"
];

export default function IconCloudDemo() {
    return (
        <div className="section h-full">
            <AuroraBackground>


                <div id="2" className="relative h-[100svh] w-full flex items-center justify-end  overflow-hidden  flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 20 }}
                        className="relative h-max w-max translate-y-14">
                        <div
                            className="h-60 w-60 z-10">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                        {/* <div className="absolute h-64 w-64 border-4 rounded-full top-0 -z-10 translate-y-10  bg-gradient-to-tr from-[#9c40ff] to-[#d81074] blur-lg" /> */}
                    </motion.div>
                    <motion.img
                        initial={{ translateY: 400 }}
                        whileInView={{ translateY: 50 }}
                        transition={{ duration: 1, type: "spring", stiffness: 20 }}
                        className="" src="/9.png" />
                </div >
            </AuroraBackground>
        </div >
    );
}
