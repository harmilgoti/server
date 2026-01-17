import { Request, Response } from "express";
import { getUsers, addUser, getUserById } from "../store";
import { User } from "../types";
import { AppError } from "../middleware/errorHandler";

export const getAllUsers = (req: Request, res: Response) => {
    const users = getUsers();
    res.json({
        success: true,
        data: {
            app: users
        },
        count: users.length,
    });
};

export const createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;

    const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
    };

    addUser(newUser);

    res.status(201).json({
        success: true,
        data: newUser,
        message: "User created successfully",
    });
};

export const getUser = (req: Request, res: Response) => {
    const id = req.params.id as string;
    const user = getUserById(id);

    if (!user) {
        throw new AppError("User not found", 404);
    }

    res.json({
        success: true,
        value: user,
    });
};
