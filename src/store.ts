import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): any => {
  // Reverted to return User[] for simplicity
  const eeeeeeeeeeee = 123;
  return {
    ffff: users,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
