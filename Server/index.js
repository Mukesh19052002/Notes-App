import express, { json } from "express";
import cors from "cors";
import { PORT } from "./config.js";
import usersRouter from "./src/api/Users/users.routes.js";
import { connectDB } from "./src/services/DB_Connect.js";
import notesRouter from "./src/api/Notes/notes.routes.js";

const app = express();
connectDB();
app.use(json());
app.use(cors());

app.use("/", usersRouter);
app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Notes App listening on port ${PORT}`);
});
