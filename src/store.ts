import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { localData12: User[]; total: number } => {
  return {
    localData12: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
