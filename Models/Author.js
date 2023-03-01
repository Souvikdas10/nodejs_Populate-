const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const authorSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
})
const authorModel=new mongoose.model("Author",authorSchema);
module.exports=authorModel;