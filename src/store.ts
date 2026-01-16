import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { localData: User[]; total: number } => {
  return {
    localData: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
