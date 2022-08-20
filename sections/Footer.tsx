import {
    Box,
    IconButton,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Tooltip,
} from "@chakra-ui/react";

//Icon
import { FaGithub, FaLinkedin } from "react-icons/fa";

//Logo
import KasperLogo from "../components/KasperLogo";

type SocialButtonProps = {
    icon: any;
    href?: string;
    label: string;
    onClick?: () => void;
}

const SocialButton = ({ icon, label, href, onClick }: SocialButtonProps) => {
    return (
        <IconButton
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            cursor={"pointer"}
            w={10}
            h={10}
            as={"a"}
            href={href}
            display={"inline-flex"}
            icon={icon}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            aria-label={label}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
            onClick={onClick}
        />
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "#1C2F4D")}
            boxShadow={useColorModeValue("0px -3px 3px rgba(0,0,0,.1)", "")}
            color={useColorModeValue("gray.700", "gray.200")}
            position={"sticky"}
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
                <KasperLogo width={"155px"} />
                <Text>© 2022 Kasper Luna. All rights reserved</Text>
                <Stack direction={"row"} spacing={6}>
                    <Tooltip
                        openDelay={500}
                        label="Connect with me on LinkedIn"
                        aria-label="Tooltip for LinkedIn"
                    >
                        <SocialButton
                            label={"LinkedIn"}
                            href={"https://www.linkedin.com/in/kasperluna/"}
                            icon={<FaLinkedin />}
                        />


                    </Tooltip>
                    <Tooltip
                        openDelay={500}
                        label="Check out my Github"
                        aria-label="Tooltip for Kasper's Github Link"
                    >
                        <SocialButton
                            label={"Github"}
                            href={"https://github.com/KasperLuna"}
                            icon={<FaGithub />}
                        />
                    </Tooltip>
                    {/* <Tooltip
                        openDelay={500}
                        label="Open Axie Energy Counter"
                        aria-label="Tooltop for Opening Axie Energy Counter"
                    >
                        <SocialButton
                            label={"Open Axie Energy Counter"}
                            onClick={() =>
                                window.open(
                                    `${window.location.origin}/axie`,
                                    "Axie Counter",
                                    "width=310,height=360"
                                )
                            }
                            icon={<FaEthereum />}
                        />
                    </Tooltip> */}
                </Stack>
            </Container>
        </Box>
    );
}