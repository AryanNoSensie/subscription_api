import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name : {type : String, required : true , trim : true  , minLength : 3 , maxLength : 100},
    price : {type : Number, required : true , min : 0},
    currency : {type : String, required : true , trim : true , minLength : 3 , maxLength : 5 , enum : ['USD' , 'INR' , 'EUR'] , default : 'USD'},
    frequency : {type : String, required : true , trim : true , minLength : 3 , maxLength : 10 , enum : ['daily' , 'weekly' , 'monthly' , 'yearly']},
    category : {type : String, required : true , trim : true , minLength : 3 , maxLength : 20 , enum : ['entertainment' ,'sports' ,'lifestyle', 'education' , 'politics' , 'finance']},
    paymentMethod : {type : String, required : true , trim : true },
    status : {type : String, required : true ,enum : ['active' , 'cancelled' , 'expired'] , default : 'active'},
    startDate : {type : Date, required : true , 
        validate : {
            validator : (value)=>  value <= new Date() , 
            message : 'start date must be in the past ' ,
        }
    },
    renewalDate : {type : Date , 
        validate : {
            validator : function(value){
                return value > this.startDate();
            },
            message : 'renewal date must be in the future ' ,
        }
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index : true,
    }
}, {timestamps : true});

//auto clculte the renwal date 
subscriptionSchema.pre('save' , function(next) {
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);

    }
    if(this.renewalDate < new Date()){
    this.status = 'expired';
    }
    next();
})

const subscriptionModel = mongoose.model('Subscription' , subscriptionSchema);
export default subscriptionModel;