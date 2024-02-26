import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  DocumentMagnifyingGlassIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Research in Psychology",
  desc: "Explore diverse methodologies uncovering human behavior and cognition in psychological research.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Research: Overview",
      desc: " Research Process & Sampling - Identify problems, hypotheses, variables, and sampling methods.",
      icon: <MagnifyingGlassIcon />,
    },
    {
      title: "Basics of statistics",
      desc: "Learn measurement levels, central tendency, dispersion, small sample tests, non-parametric tests, and testing fundamentals.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Data Collection & Literature Review",
      desc: "Explore techniques like questionnaires, interviews, and content analysis. Utilize digital libraries for literature review.",
      icon: <DocumentMagnifyingGlassIcon />,
    },
    {
      title: "Data Analysis & Report Writing",
      desc: "Learn data presentation, SPSS analysis, research report structure (APA style), journal publication, plagiarism, and conference paper presentation.",
      icon: <PresentationChartBarIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "description to add ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "title",
      desc: "Description",
      icon: <FaceSmileIcon />,
    },
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DevicePhoneMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export {benefitOne, benefitTwo};
