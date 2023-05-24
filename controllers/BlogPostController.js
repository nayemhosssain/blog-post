const BlogPostModel = require('../models/BlogPostModel');
const mongoose = require("mongoose");


// Create Blog Post
exports.createPost = (req, res) => {
    let reqBody = req.body;
    reqBody.email = req.headers['email'];
    BlogPostModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(200).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//Delete Blog Post
exports.deletePost = (req, res) => {
    let id  = req.params.id;
    let Query = {_id:id};
    BlogPostModel.remove(Query, (err, data) => {
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })

}


// Update Blog Post
exports.updatePost=(req,res)=>{
    let id= req.params.id;
    let reqBody=req.body;
    let Query={_id:id};
    BlogPostModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// User See His Individual Blog Post Details Using ID Parameter 
exports.postDetail=(req,res)=>{
    let id= req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let QueryObject={};
    QueryObject['_id']=ObjectId(id)
    BlogPostModel.aggregate([{$match:QueryObject}], (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


// User See His Posted All Blog Post At a Time
exports.myAllPost=(req,res)=>{
    let email=req.headers['email'];
    BlogPostModel.aggregate([
        {$match:{email:email}},
        {$project:{
                _id:1,title:1,author:1,content:1,date:1,
                date:{
                    $dateToString:{
                        date:"$date",
                        format:"%d-%m-%Y"
                    }
                }
            }}
    ], (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
