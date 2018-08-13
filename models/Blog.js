// importing ongoose modules
const mongoose = require('mongoose')
const time = require('./../libs/timeLib')
var today = time.convertToLocalTime()
console.log("\n Current Date: " + today + "\n")

// import schema
const Schema = mongoose.Schema;

let blogSchema = new Schema(

    {
        blogId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        bodyHtml: {
            type: String,
            default: ''
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        category: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        tags: [],
        
        created: {
            //type: Date,            
            //default: Date.now
            type: String,
            default: today
        },
        lastModified: {
           // type: Date,
            // default: Date.now
            type: String,
            default: today
        }
    }

)

mongoose.model('Blog', blogSchema);

// var Blog = mongoose.model('Blog', blogSchema);
// exports = Blog;
