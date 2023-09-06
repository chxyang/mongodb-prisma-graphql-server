import mongoose from "mongoose";


const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, false: true },
    image: { type: String, false: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export const Category = mongoose.model("Category", CategorySchema);