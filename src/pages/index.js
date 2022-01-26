//Components
import Head from "next/head";
import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

import { useColorMode } from "@chakra-ui/color-mode";
import { ColorModeScript } from "@chakra-ui/react";

import { useRef } from "react";
import ColorToggle from "../components/colortoggle.js";
import Skills from "../components/skills.js";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Head>
        <title>Kasper Luna</title>
        <meta
          name="description"
          content="I'm Kasper Luna, a software developer based in the Philippines. Experienced in frontend and backend system design, project management, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorModeScript initialColorMode="dark" />
      <Navbar
        scrollToAbout={aboutRef}
        scrollToSkills={skillsRef}
        scrollToProjects={projectsRef}
        scrollToContact={contactRef}
        colormode={colorMode}
      />
      <ColorToggle colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Hero scrollToAbout={aboutRef} colormode={colorMode} />

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects colormode={colorMode} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer colormode={colorMode} />
    </>
  );
}
