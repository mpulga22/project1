
const Blog = require("../models/blog");
//blogindex, //blogdetails, //blog_create_get ,//blog_create_post, blog_delete

const BlogIndex = (request,response)=>{
    Blog.find()
    .then((result)=>{
        response.render("index",{
            title:"Home",
            blog:result
        });
    }).catch((error)=>{
        console.log(error);
    })
}

const BlogDetails = (request,response)=>{
    const id = request.params.id;
    Blog.findById(id)
    .then((result)=>{
        response.render("details",{title:"Blog Details",blog:result});
    })
    .catch((error)=>{
        console.log(error);
    })

}

const BlogCreateGet = (request,response)=>{
    response.render("create",{
        title:"Create a Blog"
    });
    
}

const BlogCreatePost = (request,response)=>{
    const blog = new Blog(request.body);
    blog.save()
    .then((result)=>{
        response.redirect("/");
    })
    .catch((error)=>{
        console.log(error);
    })
}

const BlogDelete = (request,response)=>{
    const id = request.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        response.json({redirect:"/"});
    })
    .catch((error)=>{
        console.log(error);
    })
};

module.exports = {
    BlogIndex
    ,BlogDetails
    ,BlogCreateGet
    ,BlogCreatePost
    ,BlogDelete
}