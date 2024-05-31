import { BorderBeam } from "./magicui/border-beam";
import { motion } from "framer-motion"

export default function IconCloudDemo() {
    return (
        <div className="section h-full">
            <div className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-purple-500">
                <div className="absolute top-0 h-full w-full z-10 hidden lg:flex items-center justify-center  ">
                    <motion.img
                        initial={{ translateX: 200 }}
                        whileInView={{ translateX: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 20 }}
                        src="5.png" className="z-50 absolute h-40 right-0" />
                    <motion.img
                        initial={{ translateX: -200 }}
                        whileInView={{ translateX: -40 }}
                        transition={{ duration: 1, type: "spring", stiffness: 20 }}
                        src="4.png" className="z-50 left-0 absolute h-40 -translate-x-6" />
                </div>
                <motion.div
                    whileInView={{ translateY: 0 }}
                    initial={{ translateY: -130 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    className="lg:hidden flex absolute  top-0">
                    <img
                        src="5.png" className="z-50  h-40 -rotate-90" />
                </motion.div>
                <motion.div
                    whileInView={{ translateY: 20 }}
                    initial={{ translateY: 150 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    className="lg:hidden flex absolute  bottom-0">
                    <img
                        src="4.png" className="z-50  h-40 -rotate-90" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0, duration: 1, type: "spring", stiffness: 20 }}
                    className="h-max w-max relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 20 }}
                        className="h-full w-full bg-[#dcbf9e] blur-2xl rounded-2xl  absolute " />

                    <div className="bg-gradient-to-tr from-[#ffaa40] to-[#9c40ff] p-[1px] rounded-xl h-max lg:w-full w-11/12 mx-auto">
                        <div className="relative lg:h-96  bg-neutral-800 rounded-xl   z-100">
                            <img src="https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379884/portfolio/bhyfnxmqmst6a3kcxu1l.webp" className="h-full  w-full object-cover  rounded-xl " />
                            <BorderBeam />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
