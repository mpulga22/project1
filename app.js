const express = require("express");
const mongoose = require("mongoose");
const blogroutes = require("./routes/blogroutes");

//express
const app = express();

//ejs
app.set("view engine","ejs");

//mongodb
const mongodb = "mongodb+srv://mpulga1:test1234@nodejs.hwmzrbh.mongodb.net/nodetuts?retryWrites=true&w=majority";

mongoose.connect(mongodb)
.then(()=>{
    //listen
    app.listen(3000);
})
.catch((error)=>{
    console.log(error);
});

//middleware and static flies
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));





// app.use((request,response,next)=>{
//     console.log("new request has been made");
//     console.log("Host:",request.hostname);
//     console.log("path:",request.path);
//     console.log("method:",request.method);
//     next();
// });

//index
app.get("/",(request,response)=>{
    //response.send("<p>Home Page</p>");
   response.redirect("/blogs");

});

// app.use((request,response,next)=>{
//     console.log("in the next middleware");
//     next();
// });

//all blogs


//blogroutes
app.use("/blogs",blogroutes);

//about
app.get("/about",(request,response)=>{
    response.render("about",{
        title:"About"
    });
});

//404
app.use((request,response)=>{
    response.status(404).render("404",{
        title:"Not Found"
    });
});
