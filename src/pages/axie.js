import Head from "next/head";
import {
  Box,
  Container,
  IconButton,
  Button,
  Stack,
  Flex,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/react";
import AxieLogo from "../logos/axie";

//Icons and Logo
import { GrAdd, GrFormSubtract, GrAddCircle, GrRefresh } from "react-icons/gr";
import { useState } from "react";

export default function Axie() {
  const [energy, setEnergy] = useState(3);
  return (
    <>
      <Head>
        <title>Axie Counter - Kasper Luna</title>
        <meta
          name="description"
          content="I'm Kasper Luna, a software developer based in the Philippines. Experienced in frontend and backend system design, project management, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"xs"}>
        <Stack as={Box} textAlign={"center"} spacing={2} py={1}>
          <AxieLogo />
          <Text>Energy Counter</Text>
          <Heading>{energy}</Heading>
          <Flex direction={"row"} spacing={10}>
            <IconButton
              marginRight={5}
              width={"100%"}
              colorScheme="messenger"
              icon={<GrAdd />}
              onClick={() => setEnergy(energy + 1)}
            />
            <Spacer />
            <IconButton
              marginLeft={5}
              width={"100%"}
              colorScheme="red"
              icon={<GrFormSubtract />}
              onClick={() => setEnergy(energy - 1)}
            />
          </Flex>
          <Button
            colorScheme={"yellow"}
            leftIcon={<GrAddCircle />}
            onClick={() => setEnergy(energy + 2)}
          >
            New Round
          </Button>
          <Button leftIcon={<GrRefresh />} onClick={() => setEnergy(3)}>
            Reset / New Game
          </Button>
          <Text>© Kasper Luna.</Text>
        </Stack>
      </Container>
    </>
  );
}
