import express from "express";
import multer from "multer";
import path from "path";
import { getAllUsers, createUser, getUser } from "../controllers/userController";
import { getAllProducts, getProductCategories } from "../controllers/productController";
import { getAnalytics } from "../controllers/analyticsController";
import { search } from "../controllers/searchController";
import {
    getAllSettings,
    updateSettingsController,
    getSettingsBySection,
} from "../controllers/settingsController";
import { uploadFile, getAllUploadedFiles } from "../controllers/uploadController";
import { validateUser, validatePagination } from "../middleware/validation";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});

// User routes
router.get("/users", getAllUsers);
router.post("/users", validateUser, createUser);
router.get("/users/:id", getUser);

// Product routes
router.get("/products", getAllProducts);
router.get("/products/categories", getProductCategories);

// Analytics routes
router.get("/analytics", getAnalytics);

// Search routes
router.get("/search", validatePagination, search);

// Settings routes
router.get("/settings", getAllSettings);
router.put("/settings", updateSettingsController);
router.get("/settings/:section", getSettingsBySection);

// Upload routes
router.post("/upload", upload.single("file"), uploadFile);
router.get("/uploads", getAllUploadedFiles);

export default router;
