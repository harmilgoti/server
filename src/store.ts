import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): User[] => {
  // Reverted to return User[] for simplicity
  const data = 123;
  return users;
};

export const addUser = (user: User): void => {
  users.push(user);
};
