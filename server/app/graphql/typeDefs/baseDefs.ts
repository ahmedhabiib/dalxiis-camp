import { gql } from "apollo-server-express";

const baseDefs = gql`
  scalar Date

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

export default baseDefs;
