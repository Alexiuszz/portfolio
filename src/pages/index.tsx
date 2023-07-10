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

type Sections = {
  home?: React.RefObject<HTMLElement>;
  homeAbout?: React.RefObject<HTMLElement>;
};
export default function Home() {
  const [hideOverview, setHideOverview] = useState(true);
  const heroSection = useRef<HTMLElement>(null);
  const AboutSectionRef = useRef<HTMLElement>(null);
  const ExperienceSectionRef = useRef<HTMLElement>(null);
  const ProjectsRef = useRef<HTMLElement>(null);
  const ContactsRef = useRef<HTMLElement>(null);

  const scrollSection = (section: string) => {
    const sections: Sections = {
      home: heroSection,
      homeAbout: AboutSectionRef,
    };
    if (
      sections[section as keyof Sections] &&
      sections[section as keyof Sections]?.current
    ) {
      sections[section as keyof Sections]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const showOverview = setTimeout(() => {
      setHideOverview(false);
    }, 3000);

    return () => {
      clearTimeout(showOverview);
    };
  });

  return (
    <Layout
      home={true}
      hideOverview={hideOverview}
      pageOverview={PageOverview}
      scrollSection={scrollSection}
    >
      <Hero ref={heroSection} />
      <AboutSection ref={AboutSectionRef} />
      <ExperienceSection ref={ExperienceSectionRef} />
      <Projects ref={ProjectsRef}/>
      <ContactSection ref={ContactsRef}/>
    </Layout>
  );
}
