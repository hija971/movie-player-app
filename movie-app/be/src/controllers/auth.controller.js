import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import UserModel from "../models/user.model.js";

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });

    if (!existingUser) {
        res.status(401);
        throw new Error("Invalid credentials")
    }

    const isMatchPassword = await bcrypt.compare(password, existingUser.password);

    if (!isMatchPassword) {
        res.status(401);
        throw new Error("Email or password is not correct");
    }

    const jwtPayload = {
        email: existingUser.email,
        id: existingUser.id
    }

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
        expiresIn: "1h",
    });

    res.status(200).send({
        accessToken: token,
        message: "Login successfully"
    })
});

const register = asyncHandler(async (req, res) => {
    const { fullname, firstname, lastname, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
        res.status(400);
        throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        fullname,
        firstname,
        lastname,
        email,
        password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send({
        message: "Register successfully"
    });
});

const getMe = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const currentUser = await UserModel.findById(id).select("-password");

    if (!currentUser) {
        res.status(401)
        throw new Error("Unauthenticated user")
    }

    res.send({
        userInfo: currentUser,
    });
});

const AuthController = {
    login,
    register,
    getMe
}

export default AuthController;