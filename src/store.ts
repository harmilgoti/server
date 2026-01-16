import { User } from './types';

// In-memory store
const users: User[] = [];

export const getUsers = (): User[] => {
    return users;
};

export const addUser = (user: User): void => {
    users.push(user);
};
