const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const blogschema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
},{timestamps:true}
);

const Blog = mongoose.model("Blog",blogschema);

module.exports = Blog;