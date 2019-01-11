const filter = require('lodash/filter');
const { GraphQLServer } = require('safe-graphql-yoga');
const data = require('./mock-data');

const typeDefs = `
      type Query {
            contributors(where: UserInput): [Contributor!]!
      }
      type Contributor {
            id: ID!
            amount: String!
            currency: String!
            country: String!
      }
      input UserInput {
            age: Int
            amount: String
            currency: String
            country: String
      }
`;

const resolvers = {
      Query: {
            contributors: (_, { where }) => (where ? filter(data, where) : data),
      },
};

module.exports = new GraphQLServer({ typeDefs, resolvers });
