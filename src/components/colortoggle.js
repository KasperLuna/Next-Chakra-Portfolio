import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ColorToggle({ colorMode, toggleColorMode }) {
  return (
    <Box
      marginTop="10px"
      marginRight="4px"
      marginBottom="-25px"
      sx={{
        position: "-webkit-sticky" /* Safari */,
        position: "sticky",
        top: "1",
      }}
    >
      <Flex>
        <Spacer />
        <Tooltip
          label="Toggle site colors"
          aria-label="A tooltip"
          openDelay={500}
        >
          <IconButton
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
