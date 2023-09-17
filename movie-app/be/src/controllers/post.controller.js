import asyncHandler from "express-async-handler";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import PostModel from "../models/post.model.js";

const getVideos = asyncHandler(async (req, res) => {
    const movies = await PostModel.find({});

    res.status(200).send({
        movies: movies,
    });
});
const postVideo = asyncHandler(async (req, res) => {

});

const postAvatar = asyncHandler(async (req, res) => {

});

const PostController = {
    getVideos,
    postVideo,
    postAvatar,
}

export default PostController;