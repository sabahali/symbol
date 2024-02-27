"use client"
import Container from "./container";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./typewriter-effect";
import { TextGenerateEffect } from "./text-generate-effect";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import HeroAnim from '@/Lottiefiles/HeroAnim'
import { useCurentUser } from "@/hooks/useCurrentUser";
import { redirect } from "next/navigation";
import { login } from "@/actions/login";
const testimonials = [
  {
    quote:
      `To be a global leader in groundbreaking research, innovation, and knowledge
      creation, driving positive societal change and contributing to the advancement of human
      understanding across diverse fields.`,
    title: "Vision",
  },
  {
    quote: `Our mission is to cultivate a dynamic and collaborative research environment that
    fosters curiosity, innovation, and excellence. Through rigorous inquiry, interdisciplinary
    collaboration, and the pursuit of transformative discoveries.`,
    title: "Mission",
  },
  {
    quote: `Challenge the frontiers of knowledge by engaging in cutting-edge
    research that addresses complex, real-world challenges and creates new avenues for
    exploration.`,
    title: "Push Boundaries",
  },
  {
    quote:
      `Nurture a culture of intellectual freedom, creativity, and inclusivity
     that empowers researchers at all stages of their careers to excel and make a meaningful
     impact.`,
    title: "Empower Researchers",
  },
  {
    quote: `Foster a vibrant ecosystem of interdisciplinary
    collaboration, bringing together diverse expertise to tackle multifaceted problems and create
    holistic solutions.`,
    title: "Collaborate Across Disciplines",
  },
  {
    quote: `Catalyse innovation by translating research findings into tangible
    applications, technologies, and solutions that benefit society, industry, and the world at
    large.`,
    title: "Drive Innovation",
  },
  {
    quote: `Play a pivotal role in educating the next generation of researchers
    and thought leaders, instilling a passion for inquiry, critical thinking, and ethical research
    practices.`,
    title: "Educate and Inspire",
  },
  {
    quote: `Play a pivotal role in educating the next generation of researchers
    and thought leaders, instilling a passion for inquiry, critical thinking, and ethical research
    practices.`,
    title: "Educate and Inspire",
  },
  {
    quote: `Forge international partnerships and networks to share
    knowledge, collaborate on global challenges, and contribute to the advancement of science
    and humanity worldwide.`,
    title: "Promote Global Engagement",
  },
  {
    quote: `Conduct research with the utmost integrity, adhering to ethical
    principles, transparency, and social responsibility in all aspects of our work.`,
    title: "Uphold Ethical Values",
  },
];
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
const Hero = () => {
  const subheading = `Fostering Innovative Research Academy`
  return (
    <>
      <Container className="flex container flex-wrap items-center justify-center w-full min-h-[80vh]">
        <div id="home" className="flex p-8  items-center justify-start w-full xl:w-[60%] mb-[10vh] sm:mb-0 ">
          <div className="flex flex-col w-full justify-center items-start lg:pl-10">
            <div className=" font-bold">

              <TypewriterEffect words={words} />

            </div>
            <div className="py-5  dark:text-gray-300">

              <TextGenerateEffect words={subheading} />
            </div>

            <motion.div className="flex"
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
                className="px-4 py-2 md:px-8 md:py-4 text-lg font-medium text-center text-white bg-blue-600 hover:bg-blue-800 rounded-md ">
                Register Now
              </button>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github / Special Mention to add ?</span>
              </a> */}
            </motion.div>
          </div>
        </div>
        <div className=" container  flex flex-col flex-wrap justify-center pt-0  lg:pt-[10vh] items-center  sm:w-[70vw]  w-full h-full xl:w-[40%] md:w-2/3">

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
            {/* <Image
                src={heroImg}
                width="616"
                height="600"
                className={"object-cover xs:w-[10%] sm:w-[100%] md:w-[80%] lg:w-[100%]" }
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              /> */}


            <HeroAnim />
          </motion.div>
        </div>

      </Container>
      <Container>
        <div id='features' className=" flex flex-col w-full justify-around items-center h-screen overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </Container>
    </>
  );
}



export default Hero;