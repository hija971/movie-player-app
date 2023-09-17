import express from "express";
import "dotenv/config";
import router from "./src/routers/routers.js";
import { connectToDatabase } from "./src/configs/db.config.js";
import { errorHandlerMiddleware } from "./src/middlewares/error.middleware.js";
import cors from "cors";

const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

connectToDatabase();

app.use("/api/v1", router);

app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Serving on port ${process.env.PORT}`);
});