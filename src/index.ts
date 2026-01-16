import express, { Request, Response } from "express";
import cors from "cors";
import { User } from "./types";
import { getUsers, addUser } from "./store";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// List all users data111 7777
app.get("/users", (req: Request, res: Response) => {
  res.json(getUsers());
  console.log("Listed all users data1");
});

// Create a new user
app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).send("Name and email are required");
    return;
  }
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
  };
  addUser(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
