import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): { users: User[] } => {
  return { users: users };
};

export const addUser = (user: User): void => {
  users.push(user);
};
