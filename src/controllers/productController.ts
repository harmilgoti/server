import { Request, Response } from "express";
import { getProducts, getProductsByCategory } from "../store";

export const getAllProducts = (req: Request, res: Response) => {
    const { category, inStock } = req.query;
    let products = getProducts();

    // Filter by category if provided
    if (category && typeof category === "string") {
        products = getProductsByCategory(category);
    }

    // Filter by stock status if provided
    if (inStock !== undefined) {
        const stockFilter = inStock === "true";
        products = products.filter((p) => p.inStock === stockFilter);
    }

    res.json({
        success: true,
        data: products,
        count: products.length,
        filters: {
            category: category || "all",
            inStock: inStock || "all",
        },
    });
};

export const getProductCategories = (req: Request, res: Response) => {
    const products = getProducts();
    const categories = [...new Set(products.map((p) => p.category))];

    res.json({
        success: true,
        data: categories,
        count: categories.length,
    });
};
