import {
  Box,
  Container,
  Text,
  Button,
  Stack,
  Heading,
  createIcon,
} from "@chakra-ui/react";

import { ArrowDownIcon } from "@chakra-ui/icons";
import Kasper from "../components/kasper.js";
import Luna from "../components/luna.js";

export default function CallToActionWithAnnotation() {
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
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              More
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
