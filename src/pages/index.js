import Head from "next/head";
import Logo from "../components/logo.js";
import stars from "../styles/stars.module.scss";
import styles from "../styles/home.module.css";
//import Navbar from "../components/navbar.js";
import { Box, Grid } from "@chakra-ui/layout";
import {
  Heading,
  Button,
  ScaleFade,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
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
      {/* <Navbar className={styles.navbar} /> */}
      <div className={styles.container}>
        <div className={styles.starsdiv}>
          <div className={stars.stars}>
            <div className={stars.small}></div>
            <div className={stars.medium}></div>
            <div className={stars.big}></div>
          </div>
        </div>
        <section className={styles.child}>
          <div className={styles.hero}>
            <Logo w={[350, 400, 750]} />
            <ScaleFade in={true}>
              <Heading className={styles.description}>
                BS Information Systems Student <br />
                <code className={styles.code}>
                  Experienced in Back & Frontend System Design, Project
                  Management, and Development.
                </code>
              </Heading>
            </ScaleFade>
            <Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <Tooltip
                  label="Connect with me on LinkedIn!"
                  aria-label="A tooltip"
                >
                  <IconButton
                    as={"a"}
                    colorScheme={"none"}
                    href={"https://www.linkedin.com/in/kasper-luna-1281a114b"}
                    target={"_blank"}
                    className={styles.socialiconbutton}
                    icon={<FaLinkedin className={styles.socialicons} />}
                  />
                </Tooltip>
                <Tooltip label="Check out my Github!" aria-label="A tooltip">
                  <IconButton
                    as={"a"}
                    colorScheme={"none"}
                    href={"https://github.com/KasperLunaIICS"}
                    target={"_blank"}
                    icon={<FaGithub className={styles.socialicons} />}
                  />
                </Tooltip>
                <Tooltip label="Follow me on Facebook!" aria-label="A tooltip">
                  <IconButton
                    as={"a"}
                    colorScheme={"none"}
                    href={"https://facebook.com/kasper.luna.1"}
                    target={"_blank"}
                    icon={<FaFacebook className={styles.socialicons} />}
                  />
                </Tooltip>
                <Tooltip label="Send me an email!" aria-label="A tooltip">
                  <IconButton
                    as={"a"}
                    colorScheme={"none"}
                    href={"mailto:luna.kasper.f@gmail.com"}
                    target={"_blank"}
                    icon={<HiMail className={styles.socialicons} />}
                  />
                </Tooltip>
              </Grid>
              <Box>
                <Button colorScheme="telegram" rightIcon={<ArrowRightIcon />}>
                  More
                </Button>
              </Box>
            </Grid>
          </div>
        </section>
        <section className={styles.child}>
          <div className={styles.glass}>
            <Heading className={styles.header}>Hi, I&apos;m Kasper.</Heading>
          </div>
        </section>
        <section className={styles.child}>
          <div className={styles.glass}>
            <Heading className={styles.header}>Projects</Heading>
          </div>
        </section>
        <section className={styles.child}>
          <div className={styles.glass}>
            <Heading className={styles.header}>Contact me</Heading>
          </div>
        </section>
      </div>
    </>
  );
}
