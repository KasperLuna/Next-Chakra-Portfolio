import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Tooltip,
} from "@chakra-ui/react";

//Icon
import { FaGithub, FaFacebook, FaLinkedin, FaEthereum } from "react-icons/fa";

//Logo
import Logo from "../logos/navlogo.js";

const SocialButton = ({ children, label, href, onClick }) => {
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
      onClick={onClick}
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
        <Logo colormode={colormode} width={"155px"} />
        <Text>© 2021 Kasper Luna. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Tooltip
            openDelay={500}
            label="Follow me on Facebook"
            aria-label="A tooltip"
          >
            <SocialButton
              label={"Facebook"}
              href={"https://facebook.com/kasper.luna.1"}
            >
              <FaFacebook />
            </SocialButton>
          </Tooltip>
          <Tooltip
            openDelay={500}
            label="Connect with me on LinkedIn"
            aria-label="A tooltip"
          >
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/kasperluna/"}
            >
              <FaLinkedin />
            </SocialButton>
          </Tooltip>
          <Tooltip
            openDelay={500}
            label="Check out my Github"
            aria-label="A tooltip"
          >
            <SocialButton
              label={"Github"}
              href={"https://github.com/KasperLuna"}
            >
              <FaGithub />
            </SocialButton>
          </Tooltip>
          <Tooltip openDelay={500} label="Open Axie Ene" aria-label="A tooltip">
            <SocialButton
              onClick={() =>
                window.open(
                  `${window.location.origin}/axie`,
                  "Axie Counter",
                  "width=310,height=360"
                )
              }
            >
              <FaEthereum />
            </SocialButton>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
}
