import mongoose from 'mongoose'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/express-typescript'

export const connect = async () => {
    try {
        const res = await mongoose.connect(DATABASE_URL)
    
        console.log('🌱 Connected to MongoDB')
    
      } catch (error) {
    
        console.error(`MongoDB connection error: ${error}`,)
        process.exit(1)
      }
}