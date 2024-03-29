import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // subscription: {
    //     type: String,
    //     required: true,
    // },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    avatar: {
        type: String,
    }
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;