import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { data: User[]; total: number } => {
  return {
    data: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
