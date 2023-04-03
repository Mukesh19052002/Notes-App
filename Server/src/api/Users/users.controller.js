import { signedToken } from "../../services/JWT.js";
import usersModel from "./users.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({
      status: "failed",
      message: "Please fill all the fields",
    });
  }

  const isUserAlreadyExists = await usersModel.findOne({ email });
  if (!isUserAlreadyExists) {
    return res.send({
      status: "failed",
      message: "User is not registered",
    });
  } else {
    if (password === isUserAlreadyExists.password) {
      const accessToken = signedToken({ id: isUserAlreadyExists._id });
      return res.send({
        status: "success",
        message: "User logged in successfully",
        data: {
          accessToken,
        },
      });
    } else {
      return res.send({
        status: "failed",
        message: "Password is incorrect",
      });
    }
  }
};
export const signup = async (req, res) => {
  const { name, password, email, mobile } = req.body;
  if (!name || !password || !email || !mobile) {
    return res.send({
      status: "failed",
      message: "Please fill all the fields",
    });
  }
  try {
    const existsUser = await usersModel.findOne({ email });
    if (existsUser) {
      return res.send({
        status: "failed",
        message: "Your email is already exists",
      });
    } else {
      const userData = new usersModel({
        name: name,
        email: email,
        password: password,
        contactNumber: mobile,
      });

      const savedUser = await userData.save();
      return res.send({
        status: "success",
        message: "User Created Successfully",
      });
    }
  } catch (err) {
    console.log("error");
  }
};
