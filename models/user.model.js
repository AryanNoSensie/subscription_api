import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type : String, required : true , trim : true  , minLength : 3 , maxLength : 20},
    email : {type : String, 
        required : true , trim : true , unique : true , 
        minLength : 3 , maxLength : 50 , lowercase : true , 
        match : /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ },

    password : {type : String, required : true  , minLength : 6 , maxLength : 15},
} ,{timestamps : true});



const userModel = mongoose.model('User' , userSchema);

export default userModel;