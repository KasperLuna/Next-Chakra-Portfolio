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

const NavItems = ["About", "Skills", "Projects", "Contact"];
const ButtonLinks = [
  {
    icon: <FaLinkedin size={25} />,
    ariaLabel: "Linkedin Link",
    label: "Connect with me on LinkedIn!",
    link: "https://www.linkedin.com/in/kasperluna/",
  },
  {
    icon: <FaGithub size={25} />,
    ariaLabel: "Github Link",
    label: "Check out my GitHub!",
    link: "https://github.com/KasperLuna",
  },
];

export default function PageNavbar() {
  const { isOpen, onToggle } = useDisclosure();

  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.500", "gray.200");
    const linkHoverColor = useColorModeValue("gray.400", "white");

    return (
      <Stack direction={"row"} spacing={4}>
        {NavItems.map((navItem) => (
          <Box key={navItem}>
            <Link
              p={2}
              //onClick={() => scrollToRef(navItem.scroll)}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              href={`#${navItem}`}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {navItem}
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
        {NavItems.map((navItem) => (
          <MobileNavItem key={navItem} value={navItem} />
        ))}
      </Stack>
    );
  };
  const MobileNavItem = (params) => {
    const { value } = params;
    return (
      <Stack spacing={4}>
        <Flex
          py={2}
          as={Link}
          //onClick={() => scrollToRef(params.scroll)}
          justify={"space-between"}
          align={"center"}
          justifyContent={"end"}
          href={`#${value}`}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {value}
          </Text>
        </Flex>
      </Stack>
    );
  };

  return (
    <Box
      id={"top"}
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
          {ButtonLinks.map((item) => (
            <>
              <Tooltip
                aria-label={`Tooltip for ${item.ariaLabel}`}
                openDelay={500}
                label={item.label}
              >
                <IconButton
                  as={"a"}
                  colorScheme={"gray"}
                  href={item.link}
                  target={"_blank"}
                  icon={item.icon}
                  aria-label={item.ariaLabel}
                />
              </Tooltip>
            </>
          ))}
        </Stack>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "end" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
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
