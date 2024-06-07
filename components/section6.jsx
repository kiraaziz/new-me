"use client"
import { motion } from "framer-motion"
import Particles from "@/components/magicui/particles";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Link from "next/link";


export default function IconCloudDemo() {
    return (
        <div className="section h-full relative">
            <motion.div
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 20 }}

                className="absolute mx-auto p-10 flex items-center justify-center h-full w-full  flex-col space-y-3   z- ">
                <Link href={"https://github.com/kiraaziz"}>
                    <div
                        // initial={{ opacity: 0, translateX: -50 }}
                        // whileInView={{ opacity: 1, translateX: 0 }}
                        // transition={{ duration: 0.6, type: "spring", stiffness: 20 }}
                        className="w-72 hover:bg-white hover:text-black ease-in-out duration-200 transition-all bg-black  0 py-3 text-white flex items-center justify-center text-lg font-bold"
                    >
                        Github
                    </div>
                </Link>
                <Link href={"https://www.facebook.com/aziz.kira.581/"}>
                    <div
                        // initial={{ opacity: 0, translateX: -50 }}
                        // whileInView={{ opacity: 1, translateX: 0 }}
                        // transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 20 }}
                        className="w-72 hover:bg-white hover:text-black ease-in-out duration-200 transition-all bg-black  0 py-3 text-white flex items-center justify-center text-lg font-bold"
                    >
                        Facebook
                    </div>
                </Link>
                <Link href={"https://dev.to/kiraaziz"}>

                    <div
                        // initial={{ opacity: 0, translateX: -50 }}
                        // whileInView={{ opacity: 1, translateX: 0 }}
                        // transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 20 }}
                        className="w-72 hover:bg-white hover:text-black ease-in-out duration-200 transition-all bg-black  0 py-3 text-white flex items-center justify-center text-lg font-bold"
                    >
                        Dev.to
                    </div>
                </Link>
                <Link href={"https://kiraaziz.vercel.App"}>

                    <div
                        // initial={{ opacity: 0, translateX: -50 }}
                        // whileInView={{ opacity: 1, translateX: 0 }}
                        // transition={{ duration: 0.6, delay: 1.8, type: "spring", stiffness: 20 }}
                        className="w-72 hover:bg-white hover:text-black ease-in-out duration-200 transition-all bg-black  0 py-3 text-white flex items-center justify-center text-lg font-bold"
                    >
                        Other Portfolio
                    </div>
                </Link>
            </motion.div>
            <div className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-sky-500 -z-50 ">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    src="/6.jpg" className="h-full w-full -z-10 absolute bottom-0 object-cover " alt="Cloud Image" />
                <div className="absolute mx-auto p-10 flex items-end justify-start h-full w-full  flex-col ">
                    <div className='w-max flex items-start justify-start flex-col z-10 translate-y-10 '>
                        <GradualSpacing
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-white opacity-30 blur"
                            text="You can contact Master Kira at"
                        />
                    </div>
                </div>
                <div className="absolute mx-auto p-10 flex items-end justify-start h-full w-full  flex-col ">
                    <div className='w-max flex items-start justify-start flex-col z-10 translate-y-10'>
                        <GradualSpacing
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-white"
                            text="You can contact Master Kira at"
                        />
                    </div>
                </div>

            </div>
        </div >
    );
}
