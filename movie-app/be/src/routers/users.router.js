import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const userRouter= Router();

userRouter.get("/", UserController.getAllUsers);

export default userRouter;