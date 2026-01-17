import { Request, Response } from "express";
import { getUsers, getProducts } from "../store";
import { Analytics } from "../types";

export const getAnalytics = (req: Request, res: Response) => {
    const users = getUsers();
    const products = getProducts();

    // Calculate analytics
    const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);
    const inStockProducts = products.filter((p) => p.inStock);

    const analytics: Analytics = {
        overview: {
            totalUsers: users.length,
            totalProducts: products.length,
            totalRevenue: parseFloat(totalRevenue.toFixed(2)),
            activeUsers: Math.floor(users.length * 0.7), // Mock: 70% active
        },
        sales: {
            today: parseFloat((Math.random() * 1000).toFixed(2)),
            thisWeek: parseFloat((Math.random() * 5000).toFixed(2)),
            thisMonth: parseFloat((Math.random() * 20000).toFixed(2)),
        },
        topProducts: products
            .slice(0, 3)
            .map((p) => ({
                id: p.id,
                name: p.name,
                sales: Math.floor(Math.random() * 100),
            })),
        recentActivity: [
            {
                id: "1",
                type: "user_signup",
                description: "New user registered",
                timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
            },
            {
                id: "2",
                type: "product_sold",
                description: "Product purchased: Wireless Headphones",
                timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
            },
            {
                id: "3",
                type: "product_added",
                description: "New product added to catalog",
                timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
            },
            {
                id: "4",
                type: "user_login",
                description: "User logged in",
                timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
            },
        ],
    };

    res.json({
        success: true,
        data: analytics,
        generatedAt: new Date().toISOString(),
    });
};
