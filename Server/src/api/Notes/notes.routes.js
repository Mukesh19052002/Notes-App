import { Router } from "express";
import { createNotes, getAllNotes } from "./notes.controller.js";
const notesRouter = Router();

notesRouter.get("/", getAllNotes);
notesRouter.post("/", createNotes);

export default notesRouter;
