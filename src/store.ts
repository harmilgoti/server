import { User, Product, Settings, UploadedFile } from "./types";

// In-memory stores
const users: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    category: "Electronics",
    inStock: true,
    imageUrl: "https://via.placeholder.com/200/0000FF/FFFFFF?text=Headphones",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor",
    price: 299.99,
    category: "Electronics",
    inStock: true,
    imageUrl: "https://via.placeholder.com/200/FF0000/FFFFFF?text=Watch",
  },
  {
    id: "3",
    name: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand",
    price: 49.99,
    category: "Accessories",
    inStock: false,
    imageUrl: "https://via.placeholder.com/200/00FF00/FFFFFF?text=Stand",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with cherry MX switches",
    price: 149.99,
    category: "Electronics",
    inStock: true,
    imageUrl: "https://via.placeholder.com/200/FFFF00/000000?text=Keyboard",
  },
  {
    id: "5",
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI and SD card reader",
    price: 39.99,
    category: "Accessories",
    inStock: true,
    imageUrl: "https://via.placeholder.com/200/FF00FF/FFFFFF?text=Hub",
  },
];

let settings: Settings = {
  general: {
    siteName: "Demo App",
    siteUrl: "http://localhost:5173",
    adminEmail: "admin@example.com",
  },
  notifications: {
    emailEnabled: true,
    pushEnabled: false,
    smsEnabled: false,
  },
  security: {
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
  },
  appearance: {
    theme: "light",
    language: "en",
    timezone: "UTC",
  },
};

const uploadedFiles: UploadedFile[] = [];

// User store functions
export const getUsers = (): User[] => users;

export const addUser = (user: User): void => {
  users.push(user);
};

export const getUserById = (id: string): User | undefined => {
  return users.find((u) => u.id === id);
};

// Product store functions
export const getProducts = (): Product[] => products;

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

// Settings store functions
export const getSettings = (): Settings => settings;

export const updateSettings = (newSettings: Partial<Settings>): Settings => {
  settings = { ...settings, ...newSettings };
  return settings;
};

// File store functions
export const getUploadedFiles = (): UploadedFile[] => uploadedFiles;

export const addUploadedFile = (file: UploadedFile): void => {
  uploadedFiles.push(file);
};
