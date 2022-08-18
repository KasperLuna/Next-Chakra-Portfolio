//Components
import Head from "next/head";
import Navbar from "../components/PageNavbar";
import Hero from "../components/HeroSection";
import About from "../components/AboutSection";
import Skills from "../components/SkillsSection";
import Projects from "../components/ProjectsSection";
import Contact from "../components/ContactSection";
import Footer from "../components/PageFooter";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ColorModeScript } from "@chakra-ui/react";
import ColorToggle from "../components/ColorToggleButton";
import ScrollToTop from "../components/ScrollToTopButton";

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
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
      <ColorModeScript initialColorMode="dark" />

      <Navbar />
      <ColorToggle />
      <div ref={heroRef}>
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop visible={visibleHero} bottomDesktop={visibleFooter} />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}
