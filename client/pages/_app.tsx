import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

interface AppProps{
  Component?:  React.PropsWithChildren<any>
  pageProps: any
} 


const App:React.FC<AppProps> = ({ Component, pageProps}) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;