const author = require('../Models/Author')
const post = require('../Models/Post')
const path = require('path');

//Author

const AddAuthor = async (req, res) => {
    try {
        const auth = await new author({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        })
        const AuData = await auth.save()
        console.log(AuData);
        res.status(201).json({ success: true, msg: "Author Added Successfully", data: AuData })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, msg: "Author not added" })
    }
}

const getAuthor = async (req, res) => {
    try {
        const Allauthor = await author.find()
        res.status(200).json({ success: true, msg: "Fetch All Author", data: Allauthor })
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Author Not Found" })
    }
}

//Post 

const addpost = async (req, res) => {
    try {
        const posts = await new post({
            title: req.body.title,
            Sub_title: req.body.Sub_title,
            contain: req.body.contain,
        })
        const poData = await posts.save()
        console.log(poData);
        res.status(201).json({ success: true, msg: "Post Added Successfully", data: poData })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, msg: "Post not added" })
    }
}

//get post
const getPost = async (req, res) => {
    try {
        const AllPost = await post.find()
        res.status(200).json({ success: true, msg: "Fetch All Post", data: AllPost })
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Post Not Found" })
    }
}

//Populate
const getPopulate = async (req, res) => {
        try {
            const Result = await post.find().populate('author').exec();
            res.status(200).json({success:true, msg:"fatch data", data:Result})
        } catch (error) {
            console.log(error);
            res.status(404).json({ success: false, msg: "not found" })
    
        }
    }

    
module.exports = {
    AddAuthor,
    getAuthor,
    addpost,
    getPost,
    getPopulate
}