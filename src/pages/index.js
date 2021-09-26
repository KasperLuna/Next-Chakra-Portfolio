import Head from "next/head";
import stars from "../styles/stars.module.scss";
import styles from "../styles/home.module.css";
import { Box, Grid } from "@chakra-ui/layout";
import { Heading, Button, IconButton, Tooltip } from "@chakra-ui/react";

//Icons
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

//Logo
import Kasper from "../components/kasper.js";
import Luna from "../components/luna.js";

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
      <div className={styles.starsdiv}>
        <div className={stars.stars}>
          <div className={stars.small}></div>
          <div className={stars.medium}></div>
          <div className={stars.big}></div>
        </div>
      </div>
      <div className={styles.container}>
        <section className={styles.child}>
          <div className={styles.hero}>
            <Box p={4} display={{ md: "flex" }}>
              <Kasper />
              <Box
                width={[
                  "100%", // 0-30em
                  "100%", // 30em-48em
                  "81%", // 48em-62em
                  "81%", // 62em+
                ]}
              >
                <Luna />
              </Box>
            </Box>
            <Box>
              <Heading className={styles.description}>
                BS Information Systems Student <br />
                <code className={styles.code}>
                  Experienced in Back & Frontend System Design, Project
                  Management, and Development.
                </code>
              </Heading>
              <Grid>
                <Grid templateColumns="repeat(4, 1fr)" gap={1}>
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
                  <Tooltip
                    label="Follow me on Facebook!"
                    aria-label="A tooltip"
                  >
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
            </Box>
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
