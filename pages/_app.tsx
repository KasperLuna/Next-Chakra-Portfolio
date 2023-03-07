import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { LazyMotion, domAnimation } from "framer-motion";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </ChakraProvider>
  );
};

export default App;
