import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: false },
    image: { type: String },
    author: { type: String, required: false },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export const Post = mongoose.model("Post", PostSchema);