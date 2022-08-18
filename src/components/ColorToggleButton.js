import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { BsMoon, BsSun } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/color-mode";

export default function ColorToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      marginTop="10px"
      marginRight="4px"
      marginBottom="-25px"
      zIndex={"sticky"}
      sx={{
        position: ["-webkit-sticky", "sticky"],
        top: "1",
      }}
    >
      <Flex>
        <Spacer />
        <Tooltip aria-label="A tooltip" openDelay={500}>
          <IconButton
            label="Toggle site colors"
            borderRadius={20}
            variant="solid"
            colorScheme={"gray"}
            icon={
              colorMode === "light" ? <BsMoon size={25} /> : <BsSun size={25} />
            }
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}
