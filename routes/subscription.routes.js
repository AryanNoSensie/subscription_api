 import { Router } from "express";
 const subscriptionRouter = Router();




 //get all the subscriptions
    subscriptionRouter.get('/' ,(req,res) =>{
        res.send('Get all the subscriptions');
    })


     subscriptionRouter.get('/:id' ,(req,res) =>{
        res.send('Get id related subscription details');

    })

     subscriptionRouter.post('/' ,(req,res) =>{
        res.send('Create subscriptions');
    })


     subscriptionRouter.put('/:id' ,(req,res) =>{
        res.send('update id r4lated subscription details');
    })


     subscriptionRouter.delete('/:id' ,(req,res) =>{
        res.send('delete subscriptions');
    })

     subscriptionRouter.get('/user/:id' ,(req,res) =>{
        res.send('Get all the subscriptions of a user');
    })


     subscriptionRouter.put('/:id/cancel' ,(req,res) =>{
        res.send('cancel the subscriptions');
    })



     subscriptionRouter.get('/upcoming-renewals' ,(req,res) =>{
        res.send('Get upcoiming renewals of subscription ');
    })



    export default subscriptionRouter;