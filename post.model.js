const mongoose = require('mongoose');

// Define schema for User
const userSchema = new mongoose.Schema({
    UserId: { type: Number, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
});

// Define schema for Post
const postSchema = new mongoose.Schema({
    PostId: { type: Number, required: true },
    UserId: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String }
});

// Define schema for Comment
const commentSchema = new mongoose.Schema({
    UserId: { type: Number, required: true },
    PostId: { type: Number, required: true },
    username: { type: String, required: true },
    body: { type: String, required: true }
});

// Create models for each schema
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { User, Post, Comment };
