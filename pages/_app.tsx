import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    clientId={process.env.NEXT_PUBLIC_CLIENT_ID2}
    >
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>

  );
}

export default MyApp;