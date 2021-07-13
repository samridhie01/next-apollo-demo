const express = require('express')
// const nameSchema  = require('./schema');
// const nameResolver = require('./resolver');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
var casual = require('casual');

const typeDefs= gql`
  type Query {
    name: String,
    users: [User]
  }
  type User{
    name: String,
    addr: String
  }
`;


const resolvers = {
  Query:{
    name: ()=>casual.name,
    users: ()=>{
      const list =[];
      for(let i=0; i<2000; i++){
        list.push({
          name: casual.name,
          addr: casual.address
        })
      }
       return list;
      }
  }
}

const app = express();

const server = new ApolloServer({  typeDefs: typeDefs, resolvers: resolvers, introspection: true, playground: true});

app.use(cors())


server.applyMiddleware({app});
const port = process.env.PORT || 5000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}${server.graphqlPath}`)
})
