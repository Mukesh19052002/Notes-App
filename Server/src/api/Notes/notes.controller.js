import { isVerified } from "../../services/JWT.js";
import notesModel from "./notes.model.js";

const projectionData = { isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0 };

export const getAllNotes = async (req, res) => {
  const bearerToken = req.headers.authorization.split(" ");
  const { sort, page, limit } = req.query;
  if (!bearerToken[1]) {
    return res.send({
      status: "failed",
      message: "Please Login or Signup",
    });
  }
  const verifyUser = isVerified(bearerToken[1]);
  if (!verifyUser) {
    return res.send({
      status: "failed",
      message: "Invalid Token",
    });
  }
  try {
    if (sort && limit && page) {
      const skipValue = (page - 1) * limit;
      const result = await notesModel
        .find({ authorId: verifyUser.id }, projectionData)
        .sort({ title: sort })
        .limit(limit)
        .skip(skipValue);
      return res.send({
        status: "success",
        message: "All Notes obtained successfully",
        data: result,
      });
    } else {
      const result = await notesModel.find({ authorId: verifyUser.id });
      return res.send({
        status: "success",
        message: "All Notes obtained successfully",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createNotes = async (req, res) => {
  const bearerToken = req.headers.authorization.split(" ");
  const { title, content } = req.body;
  if (!bearerToken[1]) {
    return res.send({
      status: "failed",
      message: "Please Login or Signup",
    });
  }

  const verifyUser = isVerified(bearerToken[1]);
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

export const getNoteById = async (req, res) => {
  const bearerToken = req.headers.authorization.split(" ");
  const { notesId } = req.params;
  if (!bearerToken[1]) {
    return res.send({
      status: "failed",
      message: "Please Login or Signup",
    });
  }

  const verifyUser = isVerified(bearerToken[1]);
  if (!verifyUser) {
    return res.send({
      status: "failed",
      message: "Invalid Token",
    });
  }

  try {
    const existsNotes = await notesModel.findOne({ _id: notesId });
    if (existsNotes) {
      return res.send({
        status: "success",
        message: "Notes data obtained successfully",
        data: existsNotes,
      });
    } else {
      return res.send({
        status: "failed",
        message: "Notes is no longer avalilable",
      });
    }
  } catch (err) {
    console.log("error");
  }
};

export const updateNoteById = async (req, res) => {
  const bearerToken = req.headers.authorization.split(" ");
  const { title, content } = req.body;
  const { notesId } = req.params;
  if (!bearerToken[1]) {
    return res.send({
      status: "failed",
      message: "Please Login or Signup",
    });
  }

  const verifyUser = isVerified(bearerToken[1]);
  if (!verifyUser) {
    return res.send({
      status: "failed",
      message: "Invalid Token",
    });
  }

  try {
    const updatedNotes = { title: title, content: content };
    const updatedStatus = await notesModel.findByIdAndUpdate(
      { _id: notesId },
      updatedNotes
    );
    if (updatedStatus) {
      return res.send({
        status: "success",
        message: "Notes updated successfully",
        data: updatedStatus,
      });
    } else {
      return res.send({
        status: "failed",
        message: "Notes updation has some error",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
