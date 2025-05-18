import { Router } from 'express';

const authRouter = Router();

authRouter.post('/signup', (req, res) => {
    res.send ('User signed up');
});



authRouter.post('/signin', (req, res) => {
    res.send ('User signind ');
});


authRouter.post('/signout', (req, res) => {
    res.send ('User signout ');
});



export default authRouter;