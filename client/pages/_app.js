import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";


const App = ({ Component, pageProps}) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;