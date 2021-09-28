import { Box, Container, Text, Button, Stack, Heading } from "@chakra-ui/react";

//Icons and Logo
import { ArrowDownIcon } from "@chakra-ui/icons";
import Kasper from "../logos/kasper.js";
import Luna from "../logos/luna.js";

export default function Hero(props) {
  const scrollToAbout = () => {
    props.scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container maxW={"5xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 36 }}
        >
          <Box display={{ md: "flex" }}>
            <Box w="100%">
              <Kasper />
            </Box>
            <Box
              width={{
                base: "100%", // 0-48em
                md: "80%", // 48em-80em,
                lg: "80%",
                xl: "80%", // 80em+
              }}
            >
              <Luna />
            </Box>
          </Box>
          <Text>
            <Heading>BS Information Systems Student</Heading>
            Experienced in Back & Frontend System Design, Project Management,
            and Development.
          </Text>
          <Box>
            <Button
              leftIcon={<ArrowDownIcon />}
              colorScheme={"blue"}
              bg={"blue.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => scrollToAbout()}
            >
              More
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
