import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://mukesh:V8J69RWDR3wPYCrz@cluster0.gwcgpw3.mongodb.net/Notes_App?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database connected sucessfully"))
    .catch((err) => console.log(err));
};
