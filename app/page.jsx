"use client";
import { motion } from "framer-motion"
import ReactFullpage from "@fullpage/react-fullpage";
import RetroGrid from "@/components/magicui/retro-grid";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import WordPullUp from "@/components/magicui/word-pull-up";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";
import { useEffect, useState } from "react";

export default function Home() {

  const [api, setApi] = useState()

  return (
    <div className="w-full h-[100svh] relative">
      <div className="absolute z-50 m-3 bottom-0 lg:top-1/2  lg:bottom-1/2 lg:right-0 ">
        <div className="gap-0.5 flex flex-row lg:flex-col">
          {[...Array(6)].map((_, index) => (
            <button onClick={() => api && api.moveTo(index + 1)} className={`${api && index === api.getActiveSection() ? "bg-white" : "bg-white/40"} h-4 w-4 rounded   border border-black/20`}>{api && api.getActiveSection().index}</button>
          ))}
        </div>
      </div>
      <ReactFullpage
        scrollingSpeed={600}
        render={({ state, fullpageApi }) => {
          setApi(fullpageApi)
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section h-full">
                  <div className="relative h-[100svh] w-full bg-orange-600 flex overflow-hidden">
                    <RetroGrid />
                    <motion.div
                      initial={{ translateX: -600 }}
                      whileInView={{ translateX: 0 }}
                      transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 20 }}
                      className="relative h-[100svh] w-full  hidden lg:flex ">
                      <img className="w-full h-full object-cover" src="2.jpg" />
                      <img src="/1.png" className="h-full object-cover -translate-x-1/2" />
                    </motion.div>
                    <div className="h-full w-full flex items-start text-black justify-center  flex-col space-y-6  relative">
                      <WordPullUp
                        className="text-6xl font-bold tracking-[-0.02em]  md:text-7xl md:leading-[5rem]  p-10"
                        words="The Cool and Great Kira Aziz"
                      />
                      <div className="flex items-center justify-center w-full bottom-8 absolute ">
                        <button onClick={() => {
                          fullpageApi.moveSectionDown()
                        }} className="border-2 border-black h-12 rounded-full w-7  z-50   animate-pulse">
                          <div className="h-full w-full relative p-1.5">
                            <div className="absolute h-3 w-3 bg-black rounded-full animate-bounce bottom-1.5" />
                          </div>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="section h-full">
                  <div id="second" className="relative h-[100svh] w-full bg-indigo-500 flex items-center justify-center overflow-hidden">
                    <DotPattern
                      className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]",
                      )}
                    />

                    <motion.div
                      initial={{ translateY: 600 }}
                      whileInView={{ translateY: 200 }}
                      transition={{ delay: 0, duration: 1, type: "spring", stiffness: 20 }}
                      className="w-96 h-full translate-y-1/3 rounded-full border-[55px]  absolute flex border-indigo-700" />
                    <motion.div
                      initial={{ translateY: 600 }}
                      whileInView={{ translateY: 200 }}
                      transition={{ delay: 0, duration: 1, type: "spring", stiffness: 20 }}
                      className="w-96 h-full translate-y-1/3 rounded-full border-[55px]  absolute flex border-indigo-700 blur-2xl" />
                    <motion.img
                      initial={{ translateY: 300 }}
                      whileInView={{ translateY: 100 }}
                      transition={{ delay: 0, duration: 1, type: "spring", stiffness: 20 }}
                      src="3.png" className="absolute h-[87svh] -bottom-0  object-cover lg:z-10" />
                    <div className="w-full h-full absolute flex items-center">
                      <VelocityScroll
                        text="The most exceptional full-stack developer ever created by divine hands ."
                        default_velocity={1}
                        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                      />
                    </div>
                  </div>

                </div>
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </div>
  )
}