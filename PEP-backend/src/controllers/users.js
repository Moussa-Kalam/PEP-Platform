import { User } from "../db/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function createUser(req, res) {
    try {
        const { fullName, dateOfBirth, username, gender = null, country, interests = null, email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
          return res.status(409).json({
            message: "Email already exists",
          });
        }
        const user = await User.create({
          fullName,
          dateOfBirth,
          username,
          gender,
          country,
          interests,
          email,
          password: encryptedPassword,
        });
    
        const newUser = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
        const token = jwt.sign(newUser, process.env.SECRET_KEY);
        return res.status(201).json({
          message: "User created",
          user: newUser,
          token,
        });
      } catch (error) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error.message,
        });
      }
}

export async function signin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({
        message: "Invalid password or email",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const newUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const token = jwt.sign(newUser, process.env.SECRET_KEY);
    return res.status(200).json({
      message: "User logged in",
      user: newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}