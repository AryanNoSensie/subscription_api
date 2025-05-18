import mongoose from 'mongoose';


async function connectingdb(){
    await mongoose.connect('mongodb+srv://aryanisok:aryanisok@aryandb.ducqf1e.mongodb.net/subscription-api');
    console.log('Database connected successfully');
}












export default connectingdb;