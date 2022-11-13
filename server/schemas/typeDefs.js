const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
  }

  type Query{
    user(name: String!): User
    users: [User]
  }

  type Auth{
    token: ID!
    user: User
  }

  type Mutation {
    login(name: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
  }
  `;

module.exports = typeDefs;