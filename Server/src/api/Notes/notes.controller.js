import { isVerified } from "../../services/JWT.js";
import notesModel from "./notes.model.js";

const projectionData = { isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0 };

export const getAllNotes = async (req, res) => {
  const { sort, page, limit } = req.query;
  if (sort && limit && page) {
    const skipValue = (page - 1) * limit;
    const result = await notesModel
      .find({}, projectionData)
      .sort({ title: sort })
      .limit(limit)
      .skip(skipValue);
    res.send(result);
  } else {
    const result = await notesModel.find();
    res.send(result);
  }
};

export const createNotes = async (req, res) => {
  const { title, content, accessToken } = req.body;

  if (!title || !content || !accessToken) {
    return res.send({
      status: "failed",
      message: "Please enter something in the notes",
    });
  }

  const verifyUser = isVerified(accessToken);
  if (!verifyUser) {
    return res.send({
      status: "failed",
      message: "Invalid Token",
    });
  }

  const newNotes = new notesModel({
    title: title,
    content: content,
    authorId: verifyUser.id,
  });
  const save = await newNotes.save();
  return res.send({
    status: "success",
    message: "Notes Created Successfully",
  });
};
