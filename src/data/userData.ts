interface User {
  id: string;
  name: string;
  email: string;
  message: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    message: "Hello, I'm John Doe!",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    message: "Hi, I'm Jane Smith!",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    message: "Hey, I'm Alice Johnson!",
  },
  {
    id: "4",
    name: "Rock Luis",
    email: "Rock.Luis@example.com",
    message: "Hey, I'm Rock Luis!",
  },
  {
    id: "5",
    name: "John Cena",
    email: "John.Cena@example.com",
    message: "Hey, I'm John Cena!",
  },
  
];

export default userList;
