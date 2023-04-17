import { Router } from "express";
import { login, signup, userById } from "./users.controller.js";
const usersRouter = Router();

usersRouter.post("/login", login);
usersRouter.post("/signup", signup);
usersRouter.get("/user", userById);

export default usersRouter;
