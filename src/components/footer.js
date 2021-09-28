import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

//Icon
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

//Logo
import Logo from "../logos/navlogo.js";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft({ colormode }) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo colormode={colormode} />
        <Text>© 2021 Kasper Luna. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Facebook"}
            href={"https://facebook.com/kasper.luna.1"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/kasper-luna-1281a114b/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Github"}
            href={"https://github.com/KasperLunaIICS"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
