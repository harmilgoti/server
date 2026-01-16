import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { localData1233: User[]; total: number } => {
  return {
    localData1233: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
