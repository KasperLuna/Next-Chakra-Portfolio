import type { NextPage } from "next";
import Head from "next/head";
import ColorToggleButton from "../components/ColorToggleButton";
import Hero from "../sections/Hero";
import TopNav from "../sections/TopNav";
// import About from "../sections/About";
// import Skills from "../sections/Skills";
// import Projects from "../sections/Projects";
// import Contact from "../sections/Contact";
// import Footer from "../sections/Footer";
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
  const footerRef = useRef(null);
  const visibleHero = useInView(heroRef, { margin: "-300px" });
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
      <Skills />
      <Projects />
      <Contact />
      <div ref={footerRef}>
        <Footer />
      </div>
      <ScrollToTopButton visible={visibleHero} bottomDesktop={visibleFooter} />
    </>
  );
};

export default Home;
