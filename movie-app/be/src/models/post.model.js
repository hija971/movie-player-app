import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

const PostModel = mongoose.model("videos", PostSchema);

export default PostModel;