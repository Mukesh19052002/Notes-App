import { Router } from "express";
import { login, signup } from "./users.controller.js";
const usersRouter = Router();

usersRouter.post("/login", login);
usersRouter.post("/signup", signup);

export default usersRouter;
