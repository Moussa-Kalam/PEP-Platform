import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/users.js";
import mentorRouter from "./routes/mentors.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth", userRouter);
app.use("/mentors", mentorRouter);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server start on port: ${port}`);
});
