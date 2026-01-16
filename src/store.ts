import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { localData1: User[]; total: number } => {
  return {
    localData1: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
