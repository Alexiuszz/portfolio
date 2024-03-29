"use client";
import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Layout from "@/components/main-layout/layout";
import AboutSection from "@/sections/about/about";
import Hero from "@/sections/hero/hero";
import ExperienceSection from "@/sections/experience/experience";
import Projects from "@/sections/projects/projects";
import ContactSection from "@/sections/contact/contact";
import Head from "next/head";

const PageOverview = [
  {
    id: "home",
    text: "Home Page",
    icon: "",
  },
  {
    id: "homeAbout",
    text: "Who am I?",
    icon: "",
  },
  {
    id: "projects",
    text: "Notable Projects",
    icon: "",
  },
  {
    id: "posts",
    text: "Recent Posts",
    icon: "",
  },
];

// type Sections = {
//   home?: React.RefObject<HTMLElement>;
//   homeAbout?: React.RefObject<HTMLElement>;
//   experience?: React.RefObject<HTMLElement>;
//   projects?: React.RefObject<HTMLElement>;
//   contact?: React.RefObject<HTMLElement>;
// };
export default function Home() {
  const [sectionInView, setSectionInView] = useState<string>("#home");
  // const heroSection = useRef<HTMLElement>(null);
  // const AboutSectionRef = useRef<HTMLElement>(null);
  // const ExperienceSectionRef = useRef<HTMLElement>(null);
  // const ProjectsRef = useRef<HTMLElement>(null);
  // const ContactsRef = useRef<HTMLElement>(null);

  const scrollSection = (section: string) => {
    console.log(section);
    setSectionInView("#" + section);
  };
  // const scrollSection = (section: string) => {
  //   const sections: Sections = {
  //     home: heroSection,
  //     homeAbout: AboutSectionRef,
  //     experience: ExperienceSectionRef,
  //     projects: ProjectsRef,
  //     contact: ContactsRef,
  //   };
  //   if (
  //     sections[section as keyof Sections] &&
  //     sections[section as keyof Sections]?.current
  //   ) {
  //     sections[section as keyof Sections]?.current?.checkVisibility
  //   }
  // };
  // useEffect(() => {
  //   const showOverview = setTimeout(() => {
  //     setHideOverview(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(showOverview);
  //   };
  // });

  return (
    <>
      <Head>
        <title>Alexius Nwala: Full Stack Engineer</title>
        <link
          rel="canonical"
          href="https://www.alexiusnwala.com"
          key="canonical"
        />
        <meta
          name="description"
          content="Check out my portfolio, I'm currently looking for opportunites"
          key="desc"
        />
        <meta
          property="og:title"
          content="Alexius Nwala"
        />
        <meta
          property="og:description"
          content="My portfolio website"
        />
        <meta
          property="og:image"
          content="https://alexiusnwala.com/assets/images/PortHero1.png"
        />
      </Head>
      <Layout sectionInView={sectionInView}>
        <Hero setSection={scrollSection} />
        <AboutSection setSection={scrollSection} />
        <ExperienceSection setSection={scrollSection} />
        <Projects setSection={scrollSection} />
        <ContactSection setSection={scrollSection} />
      </Layout>
    </>
  );
}
