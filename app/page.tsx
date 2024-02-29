
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

  return (
    <div className="p-0">

      <div className="lg:px-2 ">
        <Navbar />
      </div>
      <div className="h-screen">
        <Hero />
      </div>
      <Features />
      <SectionTitle
        id='courses'
        pretitle="courses"
        title="Available Research Courses"

      >
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Watch a video"
        id="company"
        title="Learn how to fullfil your needs">
        &nbsp;
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Founders"
        title="Here's what our customers said">
        &nbsp;
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions" id="faq">
        Possible
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>

  );
}
