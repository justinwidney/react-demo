const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Shoe {
    brand: String!
    size: Int!
  }

  input ShoesInput {
    brand: String
    size: Int
  }

  input NewShoeInput {
    brand: String!
    size: Int!
  }

  type Query {
    me: User!
    shoes(input: ShoesInput): [Shoe]!
  }

  type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
  }
`;

const resolvers = {
  Query: {
    shoes(_, { input }) {
      return [
        { brand: "nike", size: 12 },
        { brand: "adidas", size: 12 },
      ].filter((shoe) => shoe.brand === input.brand);
    },

    me() {
      return {
        email: "test@gmail.com",
        avatar: "http://yoda.png",
        friends: [],
      };
    },
    Mutation: {
      newShoe(_, { input }) {
        return input;
      },
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(() => console.log("on port 4000"));
