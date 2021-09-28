//Components
import Head from "next/head";
import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
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
      <div style={{ position: "sticky" }}>
        <Navbar
          scrollToAbout={aboutRef}
          scrollToProjects={projectsRef}
          scrollToContact={contactRef}
        />
      </div>
      <Hero scrollToAbout={aboutRef} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
