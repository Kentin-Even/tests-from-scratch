// src/users.ts
import { Router, Request, Response, RequestHandler } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUserName,
} from "./usersStore";

const router = Router();

/**
 * GET /users
 * → renvoie la liste JSON des utilisateurs.
 */
router.get("/", ((req: Request, res: Response) => {
  res.status(200).json(getUsers());
}) as RequestHandler);

router.post("/", ((req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "name is required" });
    return;
  }
  const user = createUser(name);
  res.status(201).json(user);
}) as RequestHandler);

// GET /users/:id
router.get("/:id", ((req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = getUserById(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
}) as RequestHandler);

// PUT /users/:id
router.put("/:id", ((req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "name is required" });
  const updated = updateUserName(id, name);
  if (!updated) return res.status(404).json({ error: "User not found" });
  res.json(updated);
}) as RequestHandler);

export default router;
