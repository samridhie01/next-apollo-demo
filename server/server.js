const express = require('express')
// const nameSchema  = require('./schema');
// const nameResolver = require('./resolver');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
var casual = require('casual');

const MAX_RECORDS = 60;

function dataList(){
  const list =[];
  for(let i=0; i<MAX_RECORDS; i++){
      list.push({
        name: casual.name,
        addr: casual.address
      })
    }
    return list;
}


const data = dataList();


const typeDefs= gql`
  type Query {
    name: String
    allUsers(first: Int, offset: Int): UserResult
  }
  type UserResult{
    users: [User]
    totalCount: Int
  }
  type User{
    name: String
    addr: String
  }
`;


const resolvers = {
  Query:{
    name: ()=>casual.name,
    allUsers: (_, args)=>{
      const totalCount=data.length
      const users = args.first===undefined? data.slice(args.offset) : data.slice(args.offset, args.offset+args.first);
      const result = {
        users,
        totalCount
      }
      return result;
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
