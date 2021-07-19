const express = require('express')
const schemas = require('./schema/schema')
const resolvers = require('./resolvers/resolver');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const app = express();

const server = new ApolloServer({  typeDefs: schemas.typeDefs, resolvers: resolvers.resolver, introspection: true, playground: true});

app.use(cors())


server.applyMiddleware({app});

const port = process.env.PORT || 5000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}${server.graphqlPath}`)
})
