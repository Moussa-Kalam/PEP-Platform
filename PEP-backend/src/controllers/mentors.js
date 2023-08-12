import { Mentor } from "../db/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function createMentor(req, res) {
    try {
        const { fullName, dateOfBirth, username, gender = null, country, bio = null, expertise, email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const userExists = await Mentor.findOne({ where: { email } });
        if (userExists) {
          return res.status(409).json({
            message: "Email already exists",
          });
        }
        const mentor = await Mentor.create({
          fullName,
          dateOfBirth,
          username,
          gender,
          country,
          expertise,
          bio,
          email,
          password: encryptedPassword,
        });
    
        const newMentor = {
          id: mentor.id,
          email: mentor.email,
          username: mentor.username,
        };
        const token = jwt.sign(newMentor, process.env.SECRET_KEY);
        return res.status(201).json({
          message: "Mentor created",
          user: newMentor,
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
    const mentor = await Mentor.findOne({ where: { username } });
    if (!mentor) {
      return res.status(401).json({
        message: "Invalid password or email",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, mentor.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const newMentor = {
      id: mentor.id,
      email: mentor.email,
      username: mentor.username,
    };
    const token = jwt.sign(newMentor, process.env.SECRET_KEY);
    return res.status(200).json({
      message: "Mentor logged in",
      user: newMentor,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}