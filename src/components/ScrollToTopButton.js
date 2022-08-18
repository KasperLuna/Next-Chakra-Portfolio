import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Tooltip, Fade, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { ChevronUpIcon } from "@chakra-ui/icons";

export default function ScrollToTopButton(props) {
  const { bottomDesktop } = props;
  return (
    <Fade in={!props.visible}>
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
