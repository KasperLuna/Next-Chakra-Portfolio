import Head from "next/head";
import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import Features from "../components/features.js";
import Pricing from "../components/pricing.js";
import Testimonials from "../components/testimonials.js";
import Footer from "../components/footer.js";

import styles from "../styles/home.module.css";

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
      <Navbar className={styles.navbar} />
      <Hero />
      <Features />
      <Pricing />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
