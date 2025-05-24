import express from 'express';
const app = express();

import  userRouter from './routes/user.routes.js';
import  authRouter from './routes/auth.routes.js';
import  subscriptionRouter from './routes/subscription.routes.js';
import connectingdb from './database/db.js';

 // Initialize database connection

app.use(express.json());//middle ware to pasrse json body 

app.use('api/v1/users', userRouter); //user router
app.use('api/v1/auth', authRouter); //auth router
app.use('api/v1/subscription', subscriptionRouter); //subscription router

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Management System');
});












async function connect(){
   await  connectingdb(); // Initialize database connection

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
}
connect(); 


export default app; //exporting the app