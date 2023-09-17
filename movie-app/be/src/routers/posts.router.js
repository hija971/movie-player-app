import { Router } from "express";
import PostController from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/", PostController.getVideos);
postRouter.post("/upload-video", PostController.postVideo);
postRouter.post("/upload-avatar", PostController.postAvatar);



export default postRouter;