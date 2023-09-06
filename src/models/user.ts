import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    { bio: String },
    { _id: false });

const UserSchema = new Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    profile: { type: ProfileSchema, required: false },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" , required: false}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export const User = mongoose.model("User", UserSchema);