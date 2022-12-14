const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }
  input PetInput {
    name: String
    type: String
  }
  input PetIdInput {
    ID: ID
  }

  type Query {
    pets(input: PetInput): [Pet]
    pet(input: PetIdInput): Pet
    user: User
  }
`;

module.exports = typeDefs;
