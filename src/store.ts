import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { localData123: User[]; total: number } => {
  return {
    localData123: users,
    total: users.length,
  };
};

export const addUser = (user: User): void => {
  users.push(user);
};
