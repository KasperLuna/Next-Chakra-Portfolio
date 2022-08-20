import { IconButton, Box, Flex, Spacer, Tooltip, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ColorToggleButton(): JSX.Element {
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
                        aria-label="Toggle site colors"
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