import { Router } from "express";
import {
  createNotes,
  getAllNotes,
  getNoteById,
  updateNoteById,
} from "./notes.controller.js";
const notesRouter = Router();

notesRouter.get("/", getAllNotes);
notesRouter.post("/", createNotes);
notesRouter.get("/:notesId", getNoteById);
notesRouter.put("/:notesId", updateNoteById);

export default notesRouter;
