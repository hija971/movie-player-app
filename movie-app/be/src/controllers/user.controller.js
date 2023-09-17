import asyncHandler from "express-async-handler";
import UserModel from "../models/user.model.js";

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).send({
        users: users,
        message: "Successfully",
    });
});

const UserController = {
    getAllUsers,
};

export default UserController;