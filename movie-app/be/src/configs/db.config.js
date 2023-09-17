import mongoose from "mongoose";
import "dotenv/config";

export const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database is connection at ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};