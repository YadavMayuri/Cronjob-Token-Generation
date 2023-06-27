import mongoose from "mongoose";
import { Schema } from "mongoose";

const token = new Schema({
    token: String
});

export default mongoose.model("Token", token);