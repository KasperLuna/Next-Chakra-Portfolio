import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Alert,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
  Fade,
} from "@chakra-ui/react";
import { useState } from "react";
import { AlertIcon } from "@chakra-ui/alert";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function SimpleCard() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name && message) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          Name: name,
          Email: email,
          Message: message,
        }),
      })
        .then(() => setOpen(true))
        .catch((error) => alert(error));
    }
  };

  return (
    <Flex align={"center"} justify={"center"} pt={20} pb={20}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={7}>
        <Stack textAlign={"center"} align={"center"}>
          <Heading fontSize={"4xl"}>Contact me!</Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            You can always reach me at{" "}
            <Link href="mailto:luna.kasper.f@gmail.com" color={"blue.400"}>
              mail@kasperluna.com
            </Link>
            , but you can leave a message here too :)
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Fade in={true} whileHover={{ scale: 1.025 }}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={9}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder="Good Work, Kasper!"
                    required
                  />
                </FormControl>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Send!
                </Button>
              </Stack>
            </Box>
          </Fade>
          <form
            name="contact"
            netlify="true"
            netlify-honeypot="bot-field"
            data-netlify="true"
            hidden
          >
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="text" name="Message" />
          </form>
          {open ? (
            <Alert status="success">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription display="block">
                  Your message has been received. I will get back to you as soon
                  as possible! Take care and stay safe :)
                </AlertDescription>
              </Box>
            </Alert>
          ) : null}
        </form>
      </Stack>
    </Flex>
  );
}
