const { ApolloServer } = require("apollo-server");
//import { ApolloServer } from "apollo-server";
//import { typeDefs } from "./schema.js";
//import { resolvers } from "./resolvers.js";
//import { models, db } from "./db";
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models, db } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
