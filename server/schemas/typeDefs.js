const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Query{
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
  }
  `;

module.exports = typeDefs;