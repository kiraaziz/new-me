"use client"
import { BorderBeam } from "./magicui/border-beam";
import { motion } from "framer-motion"
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import Link from "next/link";
import BlurIn from "./magicui/blur-in"
import GradualSpacing from "@/components/magicui/gradual-spacing";

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
                    className="lg:hidden flex absolute  top-0" >
                    <img
                        src="5.png" className="z-50  h-40 -rotate-45 translate-x-48" />
                </motion.div>
                <motion.div
                    whileInView={{ translateY: 20 }}
                    initial={{ translateY: 150 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    className="lg:hidden flex absolute  bottom-0">
                    <img
                        src="4.png" className="z-50  h-40 -rotate-45 -translate-x-48" />
                </motion.div>
                <div className="flex w-max items-end flex-col justify-end absolute z-50 top-0 left-0 m-10">
                    <GradualSpacing
                        className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-black"
                        text="Kira's Masterpieces "
                    />
                </div>
                <div className="w-11/12 lg:w-3/5 flex  lg:items-start items-center lg:justify-center  lg:-translate-y-12 h-full  z-50  ">
                    <TabsDemo />
                </div>
            </div>
        </div>
    );
}



export function TabsDemo() {

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start lg:my-40  lg:translate-y-8  ">
            <Tabs tabs={stack.map((v) => {
                return {
                    title: v.name,
                    value: v.name,
                    content: <div className="w-full overflow-hidden relative rounded-xl  text-white text-xl md:text-4xl font-bold h-52 lg:h-full  lg:p-10 lg:bg-purple-400 lg:shadow-purple-400 lg:shadow-[0px_0px_25px_5px] ">
                        <p className="lg:block hidden">{v.name} </p>
                        <DummyContent path={v.url} url={v.images[0]} />
                    </div>
                }
            })} />
        </div>
    );
}

const DummyContent = ({ url, path }) => {
    return (
        <Link href={`${path}`}>
            <img
                src={url}
                alt="dummy image"
                className="object-cover object-left-top  absolute inset-x-0  rounded-xl mx-auto  lg:w-[90%] lg:mt-5"
            />
        </Link>
    );
};


const stack = [{
    "name": "Type AI",
    "description": "Seamlessly integrate AI with personalized templates, cluster management, and secure API key generation. 🚀 Revolutionize your workflow effortlessly!",
    "tags": "next13 react postgresql zod mistar-ai huggingface ai",
    "url": "https://ai-type.vercel.app/",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713216265/iuesp7ulxgcgbgcu0sdo.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713216263/bhoqzw2x9hd7fgtigife.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713216262/rtase1fexqvoo8jfafnd.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713216258/loi4mxfrwlzt9obar06v.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713216260/rpr3lepflb130x4qrejt.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713216262/xpgwifw4gtveiuzkwn3z.webp"
    ],
    "md": 11
},
{
    "name": "Light Ai update",
    "description": "🚀 Unleash your creativity with our free text-to-image web app! 💬✨ Join 2500+ users and explore 20,000+ images. Exciting new features include reacting to others' creations and improved performance. Transform words into visuals effortlessly – join for free on our website! 🎨🌟 #TextToImage #CreativeFreedom",
    "tags": "next13 react firebase huggingface ai",
    "url": "https://light-ai.vercel.app",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378898/portfolio/khiiu5v8r6sukrka2duv.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378898/portfolio/ydpfy7izfpllnfnnvwv3.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378897/portfolio/zmddv7efhcdtlaer5d6g.webp"
    ],
    "md": 2
},
{
    "name": "Schooler",
    "description": "📚 Dive into collaboration with Schooler – the ultimate document-sharing app for teachers and students! 🚀✨ Explore member management, security rules, and a sleek search feature. Enjoy the flexibility of white and dark modes. Elevate your learning journey with Schooler! 💻📄",
    "tags": "next13 neon prisma shadcn posgresql",
    "url": "https://schooler-delta.vercel.app/",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378955/portfolio/pelxo9vzkdogdwfrzkrp.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378959/portfolio/tezacdhvx7bleewixhw7.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378955/portfolio/yftkmdhdgewfq8xolkaa.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378956/portfolio/xr4kec33dsqc7990dmwh.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378958/portfolio/npf5rtsbo2oed85yvapn.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378957/portfolio/qnhjys3ahq3xgwbyyjl9.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378958/portfolio/npf5rtsbo2oed85yvapn.webp"
    ],
    "md": 3
},
{
    "name": "Neoflow",
    "description": "🌐 Dive into diagram magic with Neoflow! 🚀✨ Powered by AI, it effortlessly creates stunning class, flow, and sequence diagrams. Plus, enjoy team management and gorgeous design! 💻📊 #Neoflow #DiagramCreation ",
    "tags": "next13 prisma shadcn CockroachDB llama mermaidJs firework_ai excalidraw",
    "url": "https://neoflow.deno.dev/",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379884/portfolio/bhyfnxmqmst6a3kcxu1l.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713217540/wzmu0sgztx9njkh1vfyj.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1713217546/kwtvs3yp2ma8rqnheyqh.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379885/portfolio/aklmiy1eubzcbgccazta.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379886/portfolio/qqc4jzfxmsqsnosvdgbt.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379887/portfolio/shu1tkd7581zsjwfzoef.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379888/portfolio/wowplwdpsty9nqxjs7up.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709379889/portfolio/vkmoqc28tkffz0umshhr.webp"
    ],
    "md": 4
},
{
    "name": "Manga Hook",
    "url": "http://mangahook.vercel.app/",
    "description": "Dive into a world of manga magic with our free reading app! 📚🌟 Inspired by seamless design, it offers limitless creativity. Explore manga effortlessly, anytime, anywhere! 🚀",
    "tags": "next13 express scraping manga",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378358/portfolio/ogxaava310j3ndvk14xi.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378356/portfolio/xg9lhnzwufpwdmg3urdx.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378356/portfolio/mwvvg48whnksrnokviat.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378355/portfolio/wzdc7e75rxjwfzdy5dvd.webp"
    ],
    "md": 10
},
{
    "name": "Story Ai",
    "description": "✨ Introducing Story Ai: Your AI-powered creative companion! 🚀📖 Transform ideas into stories effortlessly. 🌈 Simply choose your theme, pages, and genre to get a delightful and optimistic story. 🎉 Unleash creativity with ease! ✨",
    "tags": "next13 react firebase stable_diffusion llama lahuggingface ai",
    "url": "/",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709380342/portfolio/skkf7kxer6hfjap0su05.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709380344/portfolio/ijub3xgtnfdlxgn4kait.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709380343/portfolio/vodfhxxasznvg8m46rol.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709380967/portfolio/flsn4oza5vrzw61cpik5.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709380966/portfolio/u8znpknln32xkhkzrq0x.webp"
    ],
    "md": 1
},
{
    "name": "Manga Hook Api",
    "description": "📖 Manga Hook API: Your go-to documentation for fetching manga data effortlessly! 🔍🚀 Explore, search, and discover manga narratives seamlessly. #MangaHookAPI #OpenSourceLibrary",
    "tags": "astro documentation SSG",
    "url": "http://mangahook-api.vercel.app/",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378905/portfolio/wzmsi8blha5pjjaaw1wn.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378906/portfolio/abookfnygkbavpyjdkhp.webp",
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378906/portfolio/kmh9uz5ccs8ughshdlqp.webp"
    ],
    "md": 5
},
{
    "name": "UI editor",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "/",
    "images": [
        "https://res.cloudinary.com/dqfvbunr2/image/upload/v1709378115/portfolio/seulj5hh2lgrl2ycqj7a.webp"
    ]
},
]