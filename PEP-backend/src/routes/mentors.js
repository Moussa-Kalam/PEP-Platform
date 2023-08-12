import { Router } from "express";
import { createMentor, signin } from "../controllers/mentors";

const route = Router();

route.post("/signup", createMentor)
route.post("/signin", signin)

export default route;