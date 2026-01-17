import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): any => {
  // Reverted to return User[] for simplicity
  const eeeeeeeeeeee = 123;
  return {
    7777777: users,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
