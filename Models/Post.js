const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const postSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    Sub_title:{
        type:String,
        required:true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'author'
    },
    contain:{
        type:String,
        required:true
    },
})
const postModel=new mongoose.model("Post",postSchema);
module.exports=postModel;