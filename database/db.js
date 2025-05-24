import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'node:process';

dotenv.config();
async function connectingdb(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected successfully');
}












export default connectingdb;