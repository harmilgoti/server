import { Request, Response, NextFunction } from "express";
import { AppError } from "./errorHandler";

export const validateUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email } = req.body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
        throw new AppError("Name is required and must be a non-empty string", 400);
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
        throw new AppError("Valid email is required", 400);
    }

    next();
};

export const validateProduct = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, price, category } = req.body;

    if (!name || typeof name !== "string") {
        throw new AppError("Product name is required", 400);
    }

    if (price === undefined || typeof price !== "number" || price < 0) {
        throw new AppError("Valid price is required", 400);
    }

    if (!category || typeof category !== "string") {
        throw new AppError("Category is required", 400);
    }

    next();
};

export const validatePagination = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    if (page < 1) {
        throw new AppError("Page must be greater than 0", 400);
    }

    if (pageSize < 1 || pageSize > 100) {
        throw new AppError("Page size must be between 1 and 100", 400);
    }

    req.query.page = page.toString();
    req.query.pageSize = pageSize.toString();

    next();
};
