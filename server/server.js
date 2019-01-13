const filter = require('lodash/filter');
const { GraphQLServer } = require('safe-graphql-yoga');
const data = require('./mock-data');

const typeDefs = `
      type Query {
            contributors(where: UserInput): [Contributor!]!
      }
      type Contributor {
            id: ID!
            value: String!
            currency: String!
            address: String!
      }
      input UserInput {
            value: String
            currency: String
            address: String
      }
`;

const resolvers = {
      Query: {
            contributors: (_, { where }) => (where ? filter(data, where) : data),
      },
};

module.exports = new GraphQLServer({ typeDefs, resolvers });
