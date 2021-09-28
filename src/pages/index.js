//Components
import Head from "next/head";
import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { BsMoon, BsSun } from "react-icons/bs";

import { useRef } from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
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

      <Navbar
        scrollToAbout={aboutRef}
        scrollToProjects={projectsRef}
        scrollToContact={contactRef}
        colormode={colorMode}
      />
      <Box
        marginTop="10px"
        marginRight="4px"
        sx={{
          position: "-webkit-sticky" /* Safari */,
          position: "sticky",
          top: "1",
        }}
      >
        <Flex>
          <Spacer />

          <IconButton
            colorScheme={"gray"}
            icon={
              colorMode === "light" ? <BsMoon size={25} /> : <BsSun size={25} />
            }
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
      <Hero scrollToAbout={aboutRef} colormode={colorMode} />

      <div ref={aboutRef}>
        <About />
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
