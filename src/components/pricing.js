import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  IconButton,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle, FaGithub } from "react-icons/fa";

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

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          My Projects
        </Heading>
        <Text fontSize="lg" color={"gray.500"}></Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Createev
            </Text>
            <Text fontSize={"md"}> e-Commerce Concept Site </Text>
            <Image alt={"Createev"} src="/createev.png" objectFit={"cover"} />
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <Box w={60}>
              <Text color={"gray.600"} fontSize={"md"}>
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
                  href={"https://www.linkedin.com/in/kasper-luna-1281a114b"}
                  target={"_blank"}
                  icon={<FaGithub w={8} h={8} />}
                />
              </Tooltip>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Dealcrafter
              </Text>
              <Text fontSize={"md"}> Internal Inventory Management </Text>
              <Image
                alt={"Dealcrafter"}
                src="/dealcrafter.png"
                objectFit={"cover"}
              />
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <Box w={60}>
                <Text color={"gray.600"} fontSize={"md"}>
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
                    href={"https://www.linkedin.com/in/kasper-luna-1281a114b"}
                    target={"_blank"}
                    icon={<FaGithub w={8} h={8} />}
                  />
                </Tooltip>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              This Site
            </Text>
            <Text fontSize={"md"}> Portfolio Site </Text>
            <Image alt={"This Site"} src="/thissite.png" objectFit={"cover"} />
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <Box w={60}>
              <Text color={"gray.600"} fontSize={"md"}>
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
                  href={"https://www.linkedin.com/in/kasper-luna-1281a114b"}
                  target={"_blank"}
                  icon={<FaGithub w={8} h={8} />}
                />
              </Tooltip>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
