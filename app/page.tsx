
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
export default async function Home() {
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

      <div className="lg:px-2 ">
        <Navbar navLinks={navLinks}/>
      </div>
      <div className="h-screen">
        <Hero />
      </div>
      <Features />
      <SectionTitle
        id='courses'
        pretitle="courses"
        title="Available Research Courses"
        className = "mt-5"
      >
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Watch a video"
        id="company"
        title="Learn More">
        &nbsp;
      </SectionTitle>
      <Video />
      <SectionTitle
        id="founders"
        pretitle="Founders"
        title="Meet Our Founders">
        &nbsp;
      </SectionTitle>
      <Testimonials />
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
