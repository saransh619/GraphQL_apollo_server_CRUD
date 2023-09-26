import userList from "../data/userData"; // Adjust the path as needed

const userResolvers = {
  Query: {
    getAllUsers: () => userList,
    getUserById: (_:any, { id }: { id: string }) =>
      userList.find((user) => user.id === id),
    // Add other queries here if needed
  },
  Mutation: {
    addUser: (_:any, { name, email, message }: { name: string; email: string; message: string }) => {
      const newUser = {
        id: (userList.length + 1).toString(),
        name,
        email,
        message,
      };
      userList.push(newUser);
      return newUser;
    },
    updateUser: (_:any, { id, name, email, message }: { id: string; name?: string; email?: string; message?: string }) => {
      const user = userList.find((u) => u.id === id);
      if (!user) {
        throw new Error(`User with id: ${id} not found`);
      }
      if (name !== undefined) user.name = name;
      if (email !== undefined) user.email = email;
      if (message !== undefined) user.message = message;
      return user;
    },
    deleteUser: (_:any, { id }: { id: string }) => {
      const userIndex = userList.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error(`User with id: ${id} not found`);
      }
      const deletedUser = userList.splice(userIndex, 1)[0];
      return deletedUser;
    },
    // Add other mutations here if needed
  },
};

export default userResolvers;
