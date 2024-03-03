import React from 'react'
import Container from "./container";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import Infintescroll2 from './Infinitescroll2';
export default function Features() {
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
  return (
    <Container className=''>
    <div id='features' className=" flex w-full justify-center items-start overflow-hidden relative">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      {/* <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      /> */}
    </div>
  </Container>
  )
}
