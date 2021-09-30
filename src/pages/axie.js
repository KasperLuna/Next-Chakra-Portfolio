import Head from "next/head";
import {
  Box,
  Container,
  IconButton,
  Button,
  Stack,
  Flex,
  Spacer,
  Heading,
  Text,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Code,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import AxieLogo from "../logos/axie";

//Icons and Logo
import { GrAdd, GrFormSubtract, GrAddCircle, GrRefresh } from "react-icons/gr";
import { useState } from "react";
import { useClipboard } from "@chakra-ui/react";
import { BiCopy } from "react-icons/bi";

export default function Axie() {
  const [energy, setEnergy] = useState(3);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const wallet = "ronin:c10a01314991df0d8776bda72854556eef5922a5";
  const { hasCopied, onCopy } = useClipboard(wallet);
  return (
    <>
      <Head>
        <title>Axie Counter - Kasper Luna</title>
        <meta
          name="description"
          content="I'm Kasper Luna, a software developer based in the Philippines. Experienced in frontend and backend system design, project management, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"xs"}>
        <Stack as={Box} textAlign={"center"} spacing={2} py={1}>
          <Tooltip label="Open in Popup" aria-label="A tooltip">
            <Box
              onClick={() =>
                window.open(
                  `${window.location.origin}/axie`,
                  "Axie Counter",
                  "width=310,height=435"
                )
              }
            >
              <AxieLogo />
            </Box>
          </Tooltip>
          <Text>Energy Counter</Text>
          <Heading>{energy}</Heading>
          <Flex direction={"row"} spacing={10}>
            <IconButton
              marginRight={5}
              width={"100%"}
              colorScheme="messenger"
              icon={<GrAdd />}
              onClick={() => setEnergy(energy + 1)}
            />
            <Spacer />
            <IconButton
              marginLeft={5}
              width={"100%"}
              colorScheme="red"
              icon={<GrFormSubtract />}
              onClick={() => setEnergy(energy - 1)}
            />
          </Flex>
          <Button
            colorScheme={"yellow"}
            leftIcon={<GrAddCircle />}
            onClick={() => setEnergy(energy + 2)}
          >
            New Round
          </Button>
          <Button leftIcon={<GrRefresh />} onClick={() => setEnergy(3)}>
            Reset / New Game
          </Button>
          <Stack direction="row">
            <Text>© Kasper Luna.</Text>
            <Spacer />
            <Button colorScheme="linkedin" size="xs" onClick={onOpen}>
              Donate
            </Button>
          </Stack>
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent px={5}>
            <ModalHeader>Kasper&apos;s Ronin Wallet</ModalHeader>
            <ModalBody>
              <Text>Any Donation is much appreciated!</Text>
              <Code overflowWrap={"anywhere"}>
                ronin:c10a01314991df0d8776bda72854556eef5922a5
              </Code>
            </ModalBody>
            <ModalCloseButton />

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Tooltip
                label="(Copy to Clipboard) ronin:c10a01314991df0d8776bda72854556eef5922a5"
                placement="top"
                width="200px"
              >
                <Button leftIcon={<BiCopy />} variant="ghost" onClick={onCopy}>
                  {hasCopied ? "Copied" : "Copy"}
                </Button>
              </Tooltip>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
}
