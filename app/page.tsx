"use client"
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Navbar from "@/components/navbar";
import Features from '@/components/Features'
import {motion} from "framer-motion";

export default function Home() {

  const navLinks = [
    {
      text: "Features",
      link: "#features"
    },
    {
      text: "Courses",
      link: "#courses"
    },
    {
      text: "Company",
      link: "#company"
    },
    {
      text: "Team",
      link: "#team"
    },
    // {
    //   text: "FaQ",
    //   link: "#faq"
    // },
  ]
  return (
    <div className="">
      <div className="sm:min-h-screen">
        <div className="lg:px-2 ">
        <Navbar navLinks={navLinks} transition={false} />

        </div>
        <Hero />
      </div>
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">
        <Features />
      </motion.div>
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">

        <SectionTitle
          id='courses'
          pretitle="courses"
          title="Available Research Courses"

        >
        </SectionTitle>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">

        <Benefits data={benefitOne} />
      </motion.div>
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">

        <SectionTitle
          pretitle="Watch a video"
          id="company"
          title="Learn More">
          &nbsp;
        </SectionTitle>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">

        <Video />
      </motion.div>
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">

        <SectionTitle
          id="team"
          pretitle="Team"
          title="Meet Our Team"
        >
          &nbsp;
        </SectionTitle>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, left: 0 }} className="opacity-0 relative -left-[400px]">

        <Testimonials />
      </motion.div>
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions" id="faq">
        Possible
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </div>

  );
}
