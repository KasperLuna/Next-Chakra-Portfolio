import { Tooltip, Fade, Link, Box, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

type Props = {
    visible: boolean;
    bottomDesktop: boolean;
}

export default function ScrollToTopButton(props: Props): JSX.Element {
    const { visible, bottomDesktop } = props;
    return (
        <Fade in={!visible}>
            <Box
                position={"fixed"}
                bottom={bottomDesktop ? { base: "10px", md: "75px" } : "10px"}
                right={"10px"}
                cursor={"pointer"}
                zIndex={"sticky"}
            >
                <Flex>
                    <Spacer />
                    <Tooltip
                        label="Scroll Back to Top"
                        aria-label="Tooltip for Scrolling back to Top"
                        placement={"left"}
                        openDelay={500}
                    >
                        <IconButton
                            as={Link}
                            href={"#top"}
                            borderRadius={20}
                            variant="solid"
                            colorScheme={"gray"}
                            icon={<ChevronUpIcon boxSize={30} />}
                            aria-label="Scroll Back to Top"
                        />
                    </Tooltip>
                </Flex>
            </Box>
        </Fade>
    );
}