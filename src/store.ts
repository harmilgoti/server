import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { values: User[]; total: number } => {
  return {
    values: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
