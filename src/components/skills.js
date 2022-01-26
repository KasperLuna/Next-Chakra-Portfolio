import {
  Heading,
  Box,
  Text,
  Stack,
  Tooltip,
  useColorModeValue,
  Center,
  Wrap,
} from "@chakra-ui/react";

import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiPhp,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiHeroku,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiMaterialui,
  SiChakraui,
  SiMicrosoftazure,
  SiNetlify,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNode, FaGitAlt } from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";

function IconSet(props) {
  return (
    <Tooltip openDelay={200} label={props.title} aria-label="A tooltip">
      <Box> {props.icon}</Box>
    </Tooltip>
  );
}

function WrapBox({ children }) {
  return (
    <Box
      mt={5}
      pt={3}
      pb={3}
      pl={3}
      pr={3}
      shadow="base"
      borderWidth="1px"
      alignSelf={"center"}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      <Center>
        <Stack direction={"column"}>{children}</Stack>{" "}
      </Center>
    </Box>
  );
}

export default function Skills(props) {
  return (
    <Stack alignContent={"center"} direction={"column"} pt={20} mb={10}>
      <Box alignSelf={"center"} w={[400, 600, 700]}>
        <Stack direction={"column"} spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Technical Skills
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Here&apos;s some of the things I&apos;ve picked up along the way.
          </Text>
        </Stack>
        <WrapBox>
          <Text fontWeight="500" fontSize="2xl" alignSelf={"center"}>
            Frontend
          </Text>
          <Wrap justify="center" spacing="30px">
            <IconSet title="HTML5" icon={<AiFillHtml5 size={60} />} />
            <IconSet title="CSS3" icon={<DiCss3 size={60} />} />
            <IconSet title="PHP" icon={<SiPhp size={60} />} />
            <IconSet title="React.js" icon={<GrReactjs size={60} />} />
            <IconSet title="Next.js" icon={<SiNextdotjs size={60} />} />
            <IconSet title="Material UI" icon={<SiMaterialui size={60} />} />
            <IconSet title="Chakra UI" icon={<SiChakraui size={60} />} />
          </Wrap>
        </WrapBox>
        <WrapBox>
          <Text fontWeight="500" fontSize="2xl" alignSelf={"center"}>
            Backend
          </Text>
          <Wrap justify="center" spacing="30px">
            <IconSet title="Node.js" icon={<FaNode size={60} />} />
            <IconSet title="Express.js" icon={<SiExpress size={60} />} />
            <IconSet title="Nest.js" icon={<SiNestjs size={60} />} />
            <IconSet title="Redis" icon={<SiRedis size={60} />} />
            <IconSet title="PostgreSQL" icon={<SiPostgresql size={60} />} />
            <IconSet title="MySQL" icon={<SiMysql size={60} />} />
          </Wrap>
        </WrapBox>
        <WrapBox>
          <Text fontWeight="500" fontSize="2xl" alignSelf={"center"}>
            Miscellaneous
          </Text>
          <Wrap justify="center" spacing="30px">
            <IconSet title="Git" icon={<FaGitAlt size={60} />} />
            <IconSet title="GitHub" icon={<AiOutlineGithub size={60} />} />
            <IconSet
              title="Google Cloud Platform"
              icon={<DiGoogleCloudPlatform size={60} />}
            />
            <IconSet
              title="Microsoft Azure"
              icon={<SiMicrosoftazure size={60} />}
            />
            <IconSet title="Heroku" icon={<SiHeroku size={60} />} />
            <IconSet title="Netlify" icon={<SiNetlify size={60} />}/>
          </Wrap>
        </WrapBox>
      </Box>
    </Stack>
  );
}
