const express=require('express');
const route=express.Router();
const ApiController=require('../Controller/ApiController')

//Author
route.post('/add-author',ApiController.AddAuthor)
route.get('/get-author',ApiController.getAuthor)

//Post
route.post('/add-post',ApiController.addpost)
route.get('/get-post',ApiController.getPost)

//populate
route.get('/get-all-populate',ApiController.getPopulate)


module.exports=route;