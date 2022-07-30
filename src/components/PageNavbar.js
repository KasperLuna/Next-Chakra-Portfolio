import {
  Box,
  Flex,
  Text,
  IconButton,
  Tooltip,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

//Icons
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function PageNavbar(props) {
  const { isOpen, onToggle } = useDisclosure();

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const NAV_ITEMS = [
    {
      label: "About",
      scroll: props.scrollToAbout,
    },
    {
      label: "Skills",
      scroll: props.scrollToSkills,
    },
    {
      label: "Projects",
      scroll: props.scrollToProjects,
    },
    {
      label: "Contact",
      scroll: props.scrollToContact,
    },
  ];

  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.500", "gray.200");
    const linkHoverColor = useColorModeValue("gray.400", "white");

    return (
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Link
              p={2}
              onClick={() => scrollToRef(navItem.scroll)}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Link>
          </Box>
        ))}
      </Stack>
    );
  };

  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  const MobileNavItem = (params) => {
    return (
      <Stack spacing={4}>
        <Flex
          py={2}
          as={Link}
          onClick={() => scrollToRef(params.scroll)}
          justify={"space-between"}
          align={"center"}
          justifyContent={"end"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {params.label}
          </Text>
        </Flex>
      </Stack>
    );
  };

  return (
    <Box
      boxShadow={4}
      backgroundColor={useColorModeValue("", "#1C2F4D")}
      mb={-1}
    >
      <Flex
        opacity={"none"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Stack
          flex={{ base: "start", md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={[4, 4, 4, 4]}
        >
          <Tooltip
            openDelay={500}
            label="Connect with me on LinkedIn!"
            aria-label="A tooltip"
          >
            <IconButton
              as={"a"}
              colorScheme={"gray"}
              href={"https://www.linkedin.com/in/kasperluna/"}
              target={"_blank"}
              icon={<FaLinkedin size={25} />}
            />
          </Tooltip>
          <Tooltip
            openDelay={500}
            label="Check out my Github!"
            aria-label="A tooltip"
          >
            <IconButton
              as={"a"}
              colorScheme={"gray"}
              href={"https://github.com/KasperLuna"}
              target={"_blank"}
              icon={<FaGithub size={25} />}
            />
          </Tooltip>
        </Stack>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "end" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav scroll={scrollToRef} />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: "end", md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
