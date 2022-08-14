import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Spacer,
  Icon,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrStackOverflow } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const Feature = ({ icon, color, iconBg, title, description }) => {
  return (
    <>
      <h2>
        <AccordionButton>
          <Stack direction={"row"} align={"center"}>
            <Flex
              w={8}
              h={8}
              align={"center"}
              justify={"center"}
              rounded={"full"}
              bg={useColorModeValue(iconBg[0], iconBg[1])}
            >
              <Icon as={icon} color={color} w={5} h={5} />
            </Flex>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
          </Stack>
          <Spacer />
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{description}</AccordionPanel>
    </>
  );
};

const AboutPoints = [
  {
    icon: GrStackOverflow,
    color: "yellow.500",
    iconBg: ["yellow.100", "yellow.900"],
    title: "Full Stack Developer",
    description:
      "With a particular focus on Backend Development, I've utilized PostgreSQL, Express.js, React.js, and Node.js to full effect.",
  },
  {
    icon: BsPersonFill,
    color: "green.500",
    iconBg: ["green.100", "green.900"],
    title: "Project Management",
    description:
      "I've handled my teams to push projects forward from conceptualization all the way through development and delivery.",
  },
  {
    icon: RiTeamFill,
    color: "purple.500",
    iconBg: ["purple.100", "purple.900"],
    title: "Team-Oriented",
    description:
      "I firmly believe that learning and working closely with others is the surefire way to become a better worker. I love building things!",
  },
];

export default function AboutSection() {
  return (
    <Container maxW={"5xl"} py={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={10}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About Me
          </Text>
          <Heading>Hi, I&apos;m Kasper.</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            I&apos;m a full-stack software engineer based in Manila, and a
            graduate of B.S. Information Systems, specializing in Service
            Management at the University of Santo Tomas.
          </Text>
          <Stack spacing={1}>
            <Accordion defaultIndex={[1]} allowToggle>
              {AboutPoints.map((point, index) => (
                <AccordionItem key={index}>
                  <Feature {...point} />
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
        </Stack>

        <Flex>
          <Box
            role={"group"}
            bg={useColorModeValue("white", "gray.800")}
            rounded={"xl"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              pos={"relative"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                backgroundImage: "/face.jpg",
                filter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(35px)",
                  WebkitBackdropFilter: "blur(35px)",
                },
              }}
            >
              <Image
                rounded={"3xl"}
                alt={"feature image"}
                src={"/face.jpg"}
                objectFit={"cover"}
              />
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
