import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  IconButton,
  Tooltip,
  Image,
  Fade,
  Wrap,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

//Logos
import Createev from "../logos/createev.js";
import ThisSiteLogo from "../logos/thisSiteLogo.js";

function PriceWrapper(props, { children }) {
  return (
    <Fade in={true} whileHover={{ scale: 1.05 }}>
      <Box
        mb={4}
        maxW={"s"}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
        textAlign={"center"}
      >
        <Box py={4} px={7}>
          <Text fontWeight="500" fontSize="2xl">
            {props.title}
          </Text>
          <Text fontSize={"md"}>{props.Tag} </Text>
          {props.Image}
        </Box>
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <Box w={60}>
            <Text color={"gray.500"} fontSize={"md"}>
              {props.Description}
            </Text>
          </Box>
          <Box pt={3}>
            <Tooltip
              openDelay={500}
              label="Browse the Github Repo"
              aria-label="A tooltip"
            >
              <IconButton
                as={"a"}
                colorScheme={"gray"}
                href={props.GitLink}
                target={"_blank"}
                icon={<FaGithub size={25} />}
              />
            </Tooltip>
          </Box>
        </VStack>
      </Box>
    </Fade>
  );
}

export default function Projects(props) {
  return (
    <VStack pt={20}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          My Projects
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          I&apos;ve worked on a few things, feel free to check my repositories!
        </Text>
      </VStack>
      <Wrap w={"90%"} pt={9} spacing={8} justify="center">
        <PriceWrapper
          title={"Createev"}
          Tag={"e-Commerce Concept Site "}
          Image={<Createev colormode={props.colormode} />}
          Description={`Developed backend processes for the Createev e-commerce concept
          site. Utilizing Node.js, Express.js and a MySQL database to
          serve templated pages for e-commerce.`}
          GitLink={"https://github.com/KasperLuna/Createev-Concept"}
        />
        <PriceWrapper
          title={"Dealcrafter"}
          Tag={"Internal Inventory Management"}
          Image={
            <Box width="280px" height="280px">
              <Image
                alt={"Dealcrafter"}
                src="/dealcrafter.png"
                objectFit={"contain"}
              />
            </Box>
          }
          Description={
            "Developed backend processes for the internal Dealcrafter site, utilizing Node.js, Express.js, PostgreSQL, and Redis to serve templated pages used for inventory management."
          }
          GitLink={"https://github.com/KasperLuna/Dealcrafter"}
        />
        <PriceWrapper
          title={"This Site"}
          Tag={"Portfolio Site "}
          Image={<ThisSiteLogo colormode={props.colormode} />}
          Description={
            "An ongoing project currently using Chakra UI and Next.js to develop React.js skills and other skills related to Frontend development and integrating such with Node.js-based API's."
          }
          GitLink={"https://github.com/KasperLuna/Next-Chakra-Portfolio"}
        />
      </Wrap>
    </VStack>
  );
}
