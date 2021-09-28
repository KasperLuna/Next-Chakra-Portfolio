//Components
import Head from "next/head";
import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

export default function Home() {
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
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
