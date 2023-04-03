import token from "jsonwebtoken";
import { jwtKey } from "./env_config.js";

export const signedToken = (payload) => {
  const accessToken = token.sign(payload, process.env.JWT_KEY);
  return accessToken;
};

export const isVerified = (payload) => {
  token.verify(payload, "qwerty");
};
