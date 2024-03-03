"use client"
import Container from "./container";
import { motion } from "framer-motion";
import { TypewriterEffect, TypewriterEffectSmooth } from "./typewriter-effect";
import { TextGenerateEffect } from "./text-generate-effect";
// import HeroAnim from '@/Lottiefiles/HeroAnim'
import { login } from "@/actions/login";
import { Suspense, lazy, useEffect, useState } from "react";
import Lottie from "react-lottie-player";


const Hero = () => {
  // const [animationData, setAnimationData] = useState();
  // useEffect(() => {
  //   import('@/Lottiefiles/welcome.json').then(setAnimationData);
  // }, []);
  const MyLottieAnimation = lazy(() => import('@/Lottiefiles/HeroAnim'));

  const words = [
    {
      text: "S",
    },
    {
      text: "Y",
    },
    {
      text: "M",
    },
    {
      text: "B",
    },
    {
      text: "O",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "L",
    }
  
  ];
  const words2 = [
    {
      text: "R",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "E",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "S",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "E",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "A",
      // className: "text-blue-500 dark:text-blue-500"
  
    },
    {
      text: "R",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "C",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "H",
      // className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: " ",
    },
    {
      text: "A",
    },
    {
      text: "C",
    },
    {
      text: "A",
    },
    {
      text: "D",
    },
    {
      text: "E",
    },
    {
      text: "M",
    },
    {
      text: "Y",
    },
  
  ];
  const subheading = `Fostering Innovative Research`
  return (
    <>
      <Container className="flex flex-wrap items-center justify-center w-full min-h-[70vh] md:min-h-[80vh]">
        <div id="home" className="flex p-8  items-center justify-start w-full xl:w-[60%] 2xl:w-1/2 mb-[10vh] sm:mb-0 ">
          <div className="flex flex-col w-full justify-center items-start lg:pl-10">
          

            <div className=" font-bold">

              <TypewriterEffect words={words} />

            </div>
            <div className="pt-1">
              <TypewriterEffectSmooth words={words2} />
            </div>

            <div className="pt-1 dark:text-gray-300 space-y-5">

              <TextGenerateEffect words={subheading} />
            </div>

            <motion.div className="flex pt-3  md:pt-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
               scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,

                }
              }}
            >
              <button
                onClick={async () => {
                  await login('/dashboard/apply')
                }}
                className="px-4 py-2 md:px-6  text-base md:py-3  sm:text-lg font-medium text-center text-white bg-blue-600 hover:bg-blue-800 rounded-md ">
                Register Now
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center pt-0  lg:pt-[10vh] items-center  sm:w-[80vw]  w-full h-full xl:w-[40%] md:w-2/3 2xl:w-1/2 container">

          <motion.div

            className="h-full w-full "
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],

              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,

              }
            }}
          >
            {/* {animationData ? <Lottie animationData={animationData} loop play/> : <>Loading</>} */}
            {/* <HeroAnim /> */}
            <Suspense fallback = {<>Loading</>}>
              <MyLottieAnimation play/>
            </Suspense>
          </motion.div>
        </div>

      </Container>

    </>
  );
}



export default Hero;