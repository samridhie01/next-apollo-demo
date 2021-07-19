const {gql} = require('apollo-server-express')

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

module.exports = {typeDefs}
