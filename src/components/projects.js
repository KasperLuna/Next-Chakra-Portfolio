import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  IconButton,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

//Logos
import Createev from "../logos/createev.js";
import ThisSiteLogo from "../logos/thisSiteLogo.js";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Projects(props) {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          My Projects
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          I&apos;ve worked on a few things, feel free to check my repositories!
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 5, lg: 8 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={7}>
            <Text fontWeight="500" fontSize="2xl">
              Createev
            </Text>
            <Text fontSize={"md"}> e-Commerce Concept Site </Text>
            <Createev colormode={props.colormode} />
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <Box w={60}>
              <Text color={"gray.500"} fontSize={"md"}>
                Developed backend processes for the Createev e-commerce concept
                site. Utilizing Node.js, Express.js and a MySQL database to
                serve templated pages for e-commerce.
              </Text>
            </Box>
            <Box w="80%" pt={3}>
              <Tooltip label="Browse the Github Repo" aria-label="A tooltip">
                <IconButton
                  as={"a"}
                  colorScheme={"gray"}
                  href={"https://github.com/KasperLuna/Createev-Concept"}
                  target={"_blank"}
                  icon={<FaGithub size={25} />}
                />
              </Tooltip>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={7}>
              <Text fontWeight="500" fontSize="2xl">
                Dealcrafter
              </Text>
              <Text fontSize={"md"}> Internal Inventory Management </Text>
              <Box width="280px" height="280px">
                <Image
                  alt={"Dealcrafter"}
                  src="/dealcrafter.png"
                  objectFit={"contain"}
                />
              </Box>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <Box w={60}>
                <Text color={"gray.500"} fontSize={"md"}>
                  Developed backend processes for the internal Dealcrafter site,
                  utilizing Node.js, Express.js, PostgreSQL, and Redis to serve
                  templated pages used for inventory management.
                </Text>
              </Box>
              <Box w="80%" pt={3}>
                <Tooltip label="Browse the Github Repo" aria-label="A tooltip">
                  <IconButton
                    as={"a"}
                    colorScheme={"gray"}
                    href={"https://github.com/KasperLuna/Dealcrafter"}
                    target={"_blank"}
                    icon={<FaGithub size={25} />}
                  />
                </Tooltip>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={7}>
            <Text fontWeight="500" fontSize="2xl">
              This Site
            </Text>
            <Text fontSize={"md"}> Portfolio Site </Text>
            <ThisSiteLogo colormode={props.colormode} />
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <Box w={60}>
              <Text color={"gray.500"} fontSize={"md"}>
                An ongoing project currently using Chakra UI and Next.js to
                develop React.js skills and other skills related to Frontend
                development and integrating such with Node.js-based API&apos;s.
              </Text>
            </Box>
            <Box w="80%" pt={3}>
              <Tooltip label="Browse the Github Repo" aria-label="A tooltip">
                <IconButton
                  as={"a"}
                  colorScheme={"gray"}
                  href={"https://github.com/KasperLuna/Next-Chakra-Portfolio  "}
                  target={"_blank"}
                  icon={<FaGithub size={25} />}
                />
              </Tooltip>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
