import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrStackOverflow, GrUserManager } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
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
            Student at the University of Santo Tomas currently in my last year
            of BS Information Systems, Specializing in Service Management.
            I&apos;m <b>looking for an Internship</b> starting{" "}
            <b>January 2022.</b>
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={GrStackOverflow} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Full-Stack Developer"}
            />
            <Feature
              icon={<Icon as={BsPersonFill} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Project Management"}
            />
            <Feature
              icon={<Icon as={RiTeamFill} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Team-Oriented"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"full"}
            alt={"feature image"}
            src="/face.jpg"
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
