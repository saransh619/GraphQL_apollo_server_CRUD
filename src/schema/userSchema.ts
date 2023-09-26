import { gql } from "apollo-server";

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    message: String!
  }

  type Query {
    getAllUsers: [User]!
    getUserById(id: ID!): User
    # Add other queries here if needed
  }

  type Mutation {
    addUser(name: String!, email: String!, message: String!): User
    updateUser(id: ID!, name: String, email: String, message: String): User
    deleteUser(id: ID!): User
    # Add other mutations here if needed
  }
`;

export default userType;
