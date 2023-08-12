import { Router } from "express";
import { createUser, signin } from "../controllers/users";

const route = Router();

route.post("/signup", createUser)
route.post("/signin", signin)

export default route;