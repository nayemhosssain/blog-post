const express =require('express');
const UsersController=require("../controllers/UsersController");
const BlogPostController=require("../controllers/BlogPostController");
const AuthVerify = require("../middleware/AuthVerify");


const router =express.Router();



router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);


router.post("/createpost",AuthVerify,BlogPostController.createPost);
router.get("/updatepost/:id",AuthVerify,BlogPostController.updatePost);
router.get("/deletepost/:id",AuthVerify,BlogPostController.deletePost);
router.get("/postdetail/:id",AuthVerify,BlogPostController.postDetail);
router.get("/allpost",AuthVerify,BlogPostController.myAllPost);

module.exports=router;