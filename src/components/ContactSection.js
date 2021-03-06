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
} from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/alert";
import { useForm, ValidationError } from "@formspree/react";

const LIGHT = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.29'%3E%3Cpolygon fill='%23eeefef' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23dedede' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23cdcece' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23bcbdbe' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23abadae' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%239b9c9d' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%238A8C8D' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E")`;
const DARK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1900' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%231b2332' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%231c2638' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%231c293f' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%231c2c46' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%231c2f4d' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%231b3355' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%231A365D' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E")`;

export default function ContactSection() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  return (
    <Flex
      align={"center"}
      justify={"center"}
      pt={20}
      pb={20}
      backgroundImage={useColorModeValue(LIGHT, DARK)}
      backgroundAttachment={"inherit"}
      backgroundPosition={"center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={7}>
        <Stack textAlign={"center"} align={"center"}>
          <Heading fontSize={"4xl"}>Contact me!</Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            You can always reach me at{" "}
            <Link href="mailto:mail@kasperluna.com" color={"blue.400"}>
              mail@kasperluna.com
            </Link>
            , but you can leave a message here too :)
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
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
                  type="email"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormControl>
              <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  required
                />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  type="text"
                  placeholder="Hi Kasper! I want to discuss a project with you."
                  name="message"
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
          <ValidationError errors={state.errors} />
          {state.succeeded ? (
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
