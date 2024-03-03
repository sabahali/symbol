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
      text: "Founders",
      link: "#founders"
    },
    // {
    //   text: "FaQ",
    //   link: "#faq"
    // },
  ]
  return (
    <div className="p-0">
      <div className="sm:h-screen">
        <div className="lg:px-2 ">
          <Navbar navLinks={navLinks} transition={true} />
        </div>
        <Hero />
      </div>
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">
        <Features />
      </motion.div>
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">

        <SectionTitle
          id='courses'
          pretitle="courses"
          title="Available Research Courses"

        >
        </SectionTitle>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">

        <Benefits data={benefitOne} />
      </motion.div>
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">

        <SectionTitle
          pretitle="Watch a video"
          id="company"
          title="Learn More">
          &nbsp;
        </SectionTitle>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">

        <Video />
      </motion.div>
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">

        <SectionTitle
          id="founders"
          pretitle="Founders"
          title="Meet Our Founders"
        >
          &nbsp;
        </SectionTitle>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, scale: 1, top: 0 }} className="o opacity-0 scale-0 relative top-[100px]">

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
