import { ApolloServer } from "apollo-server";
import userSchema from "./schema/userSchema";
import userResolvers from "./resolvers/userResolvers";

const PORT = 8000;

const server = new ApolloServer({
  typeDefs: [userSchema],
  resolvers: [userResolvers],
  context: {},
});

server.listen(PORT).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
