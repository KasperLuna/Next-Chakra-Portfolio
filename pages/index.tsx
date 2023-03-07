import type { NextPage } from "next";
import Head from "next/head";
import ColorToggleButton from "../components/ColorToggleButton";
import Hero from "../sections/Hero";
import TopNav from "../sections/TopNav";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

import dynamic from "next/dynamic";

const About = dynamic(() => import("../sections/About"));
const Skills = dynamic(() => import("../sections/Skills"));
const Projects = dynamic(() => import("../sections/Projects"));
const Contact = dynamic(() => import("../sections/Contact"));
const Footer = dynamic(() => import("../sections/Footer"));

const Home: NextPage = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const visibleHero = useInView(heroRef, { margin: "-300px" });
  const visibleSkills = useInView(skillsRef, { margin: "-200px", once: true });
  const visibleProjects = useInView(projectsRef, {
    margin: "-100px",
    once: true,
  });
  const visibleFooter = useInView(footerRef, { margin: "-30px" });
  return (
    <>
      <Head>
        <title>Kasper Luna</title>
        <meta
          name="description"
          content="I'm Kasper Luna, a software engineer based in the Philippines. Experienced in frontend and backend system design, project management, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <ColorToggleButton />
      <div ref={heroRef}>
        <Hero />
      </div>
      <About />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>{visibleSkills && <Projects />}</div>
      {visibleProjects && <Contact />}
      <div ref={footerRef}>
        <Footer />
      </div>
      <ScrollToTopButton visible={visibleHero} bottomDesktop={visibleFooter} />
    </>
  );
};

export default Home;
