const mongoose = require('mongoose');

// Define the blog post schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
},{versionKey:false});

// Create a model based on the schema
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;