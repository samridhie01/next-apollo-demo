import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
              fields: {
                allUsers: {
                  keyArgs: false,
                  merge(existing = {totalCount:0, users:[]}, incoming) {
                    const totalCount = incoming.totalCount;
                    const users = [...existing.users, ...incoming.users];
                    return {users, totalCount}
                  },
                }
              }
            }
          }
    }
        
    ),
});

export default client;