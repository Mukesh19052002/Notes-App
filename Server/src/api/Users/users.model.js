import Mongoose from "mongoose";

const usersSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const usersModel = Mongoose.model("Users", usersSchema);
export default usersModel;
