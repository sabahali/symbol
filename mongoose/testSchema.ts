import mongoose from 'mongoose';
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now },
});
export default  mongoose.models.Test || mongoose.model("Test", userSchema);