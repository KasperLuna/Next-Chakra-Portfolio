import {
  //chakra,
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
import { useState } from "react";
import { motion } from "framer-motion";
// import NextImage from "next/image";
// const CustomImage = chakra(NextImage, {
//   shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
// });

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
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [perspective, setPerspective] = useState(500);
  const [isTouched, setIsTouched] = useState(false);
  const width = 470;
  const height = 547;
  const hoverEffect = `perspective(${perspective}px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

  return (
    <Container id={"About"} maxW={"5xl"} mt={{ lg: 12, xl: 12 }} py={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={10}>
          <Text
            textTransform={"uppercase"}
            color={useColorModeValue("blue.600", "blue.200")}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About Me
          </Text>

          <Heading
            as={motion.h3}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "anticipate" },
            }}
            viewport={{ once: true, margin: "-195px" }}
          >
            Hi, I&apos;m Kasper.
          </Heading>
          <Text
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={"lg"}
            as={motion.h3}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "anticipate" },
            }}
            viewport={{ once: true, margin: "-195px" }}
          >
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
            <motion.div
              onMouseMove={(e) => {
                setYRotation(
                  15 * ((e.nativeEvent.offsetX - width / 2) / width)
                );
                setXRotation(
                  -15 * ((e.nativeEvent.offsetY - height / 2) / height)
                );
                setPerspective(1000);
                setIsTouched(true);
              }}
              onMouseLeave={() => {
                setYRotation(0);
                setXRotation(0);
                setPerspective(500);
              }}
              whileTap={{ scale: 1, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              animate={!isTouched ? { scale: [1, 0.98, 1.02, 1] } : {}}
              transition={
                !isTouched
                  ? {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1,
                    }
                  : {}
              }
            >
              <Image
                rounded={"3xl"}
                alt={"Kasper in his Graduation toga"}
                src={"/face.webp"}
                objectFit={"cover"}
                transform={hoverEffect}
                width={width}
                height={height}
                transition={"box-shadow 0.1s, transform 0.1"}
                _hover={{ cursor: "pointer" }}
              />
              {/* <CustomImage
                rounded={"3xl"}
                src={"/face.webp"}
                width={width}
                height={height}
                transform={hoverEffect}
                _hover={{ cursor: "pointer" }}
              /> */}
            </motion.div>
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
