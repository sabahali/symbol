
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Navbar from "@/components/navbar";
export default async function Home() {

  return (
    <div className="p-0">
      <div className="lg:px-2">

        <Navbar />
      </div>
      <Hero />
      <SectionTitle
        id='courses'
        pretitle=" "
        title="Available Research Courses"

      >
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Watch a video"
        id="company"
        title="Learn how to fullfil your needs">
        Heading for Video About Institute
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonials for Institute
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
