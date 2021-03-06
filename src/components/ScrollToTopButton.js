import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Tooltip, Fade } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { ChevronUpIcon } from "@chakra-ui/icons";

export default function ScrollToTopButton(props) {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fade in={!props.visible}>
      <Box
        position={"fixed"}
        bottom={props.bottomDesktop ? { base: "10px", md: "75px" } : "10px"}
        right={"10px"}
        cursor={"pointer"}
        zIndex={"sticky"}
      >
        <Flex>
          <Spacer />
          <Tooltip
            label="Scroll Back to Top"
            aria-label="A tooltip"
            placement={"left"}
            openDelay={500}
          >
            <IconButton
              borderRadius={20}
              variant="solid"
              colorScheme={"gray"}
              icon={<ChevronUpIcon boxSize={30} />}
              onClick={() => scrollToRef(props.scrollToTop)}
            />
          </Tooltip>
        </Flex>
      </Box>
    </Fade>
  );
}
