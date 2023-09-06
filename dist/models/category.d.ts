import mongoose from "mongoose";
export declare const Category: mongoose.Model<{
    name: string;
    products: mongoose.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
    description?: string;
    image?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    products: mongoose.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
    description?: string;
    image?: string;
}> & {
    name: string;
    products: mongoose.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
    description?: string;
    image?: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    products: mongoose.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
    description?: string;
    image?: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    products: mongoose.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
    description?: string;
    image?: string;
}> & {
    name: string;
    products: mongoose.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
    description?: string;
    image?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
