import { Timestamp } from "bson";
import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: String,
    email: String,
}, { timestamps: true })


export const userModel = mongoose.model("user", user);
