import mongoose, { Schema } from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    tags: [{ type: String, required: false }],
    shares: [{ type: String, required: false }],
    noteBookId: { type: Schema.Types.ObjectId, required: false },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const notesModel = mongoose.model("notes", notesSchema);
export default notesModel;
