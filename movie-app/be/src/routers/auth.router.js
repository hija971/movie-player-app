import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/login", AuthController.login);

authRouter.post("/register", AuthController.register);

authRouter.get("/me", authMiddleware, AuthController.getMe)

export default authRouter;