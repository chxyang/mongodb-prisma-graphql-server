import mongoose from "mongoose";
export declare const Post: mongoose.Model<{
    created_at: Date;
    updated_at: Date;
    title: string;
    categories: mongoose.Types.ObjectId[];
    image?: string;
    content?: string;
    author?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    created_at: Date;
    updated_at: Date;
    title: string;
    categories: mongoose.Types.ObjectId[];
    image?: string;
    content?: string;
    author?: string;
}> & {
    created_at: Date;
    updated_at: Date;
    title: string;
    categories: mongoose.Types.ObjectId[];
    image?: string;
    content?: string;
    author?: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    created_at: Date;
    updated_at: Date;
    title: string;
    categories: mongoose.Types.ObjectId[];
    image?: string;
    content?: string;
    author?: string;
}, mongoose.Document<unknown, {}, {
    created_at: Date;
    updated_at: Date;
    title: string;
    categories: mongoose.Types.ObjectId[];
    image?: string;
    content?: string;
    author?: string;
}> & {
    created_at: Date;
    updated_at: Date;
    title: string;
    categories: mongoose.Types.ObjectId[];
    image?: string;
    content?: string;
    author?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
