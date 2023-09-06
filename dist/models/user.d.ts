import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    created_at: Date;
    updated_at: Date;
    email: string;
    posts: mongoose.Types.ObjectId[];
    password?: string;
    profile?: {
        bio?: string;
    };
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    created_at: Date;
    updated_at: Date;
    email: string;
    posts: mongoose.Types.ObjectId[];
    password?: string;
    profile?: {
        bio?: string;
    };
}> & {
    name: string;
    created_at: Date;
    updated_at: Date;
    email: string;
    posts: mongoose.Types.ObjectId[];
    password?: string;
    profile?: {
        bio?: string;
    };
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    created_at: Date;
    updated_at: Date;
    email: string;
    posts: mongoose.Types.ObjectId[];
    password?: string;
    profile?: {
        bio?: string;
    };
}, mongoose.Document<unknown, {}, {
    name: string;
    created_at: Date;
    updated_at: Date;
    email: string;
    posts: mongoose.Types.ObjectId[];
    password?: string;
    profile?: {
        bio?: string;
    };
}> & {
    name: string;
    created_at: Date;
    updated_at: Date;
    email: string;
    posts: mongoose.Types.ObjectId[];
    password?: string;
    profile?: {
        bio?: string;
    };
} & {
    _id: mongoose.Types.ObjectId;
}>>;
