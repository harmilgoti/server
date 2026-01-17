import { Request, Response } from "express";
import { getProducts, getUsers } from "../store";
import { SearchResult, Product, User } from "../types";

export const search = (req: Request, res: Response) => {
    const query = (req.query.q as string) || "";
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const type = (req.query.type as string) || "all";

    let allItems: any[] = [];

    // Search in products
    if (type === "all" || type === "products") {
        const products = getProducts();
        const matchedProducts = products.filter(
            (p) =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
        );
        allItems = [...allItems, ...matchedProducts.map((p) => ({ ...p, type: "product" }))];
    }

    // Search in users
    if (type === "all" || type === "users") {
        const users = getUsers();
        const matchedUsers = users.filter(
            (u) =>
                u.name.toLowerCase().includes(query.toLowerCase()) ||
                u.email.toLowerCase().includes(query.toLowerCase())
        );
        allItems = [...allItems, ...matchedUsers.map((u) => ({ ...u, type: "user" }))];
    }

    // Pagination
    const total = allItems.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = allItems.slice(startIndex, endIndex);

    const result: SearchResult<any> = {
        items: paginatedItems,
        total,
        page,
        pageSize,
        totalPages,
    };

    res.json({
        success: true,
        data: result,
        query,
        searchType: type,
    });
};
