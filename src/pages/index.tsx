"use client";
import React, { useEffect, useState } from "react";
import { LandingContainer } from "@/app/page.styles";
import Layout from "@/components/main-layout/layout";
import AboutSection from "@/sections/Home/about";
import Hero from "@/sections/Home/hero";

const PageOverview = [
  {
    id: "home",
    text: "Home Page",
    icon: "",
  },
  {
    id: "home-about",
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
export default function Home() {
  const [hideOverview, setHideOverview] = useState(true);
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
    >
      <LandingContainer
        id="home"
        initial={{
          background: `radial-gradient(circle at 50%, #d6dbdc, #d6dbdc 0%, #343434 0%, #343434 80%)`,
        }}
        animate={{
          background: `radial-gradient(circle at 50%, #d6dbdc, #d6dbdc 100%, #343434 105%, #343434 105%)`,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Hero />
      </LandingContainer>
      <AboutSection />
    </Layout>
  );
}
