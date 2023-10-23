const fs = require("fs");

// //reading files
//     fs.readFile("./docs/blog.txt",(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(data.toString());
//     });

//     console.log("last");
// //write files

// fs.writeFile("./docs/blog1.txt","hello world",(err,data)=>{
//     if(err){
//         console.log(err.toString());
//     }
//     console.log("file has been written");
// });


//directory
if(!(fs.existsSync("./assets"))){
    
fs.mkdir("./assets",(err)=>{
    if(err){
        console.log(err.toString());
    }
});

}else{
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log(err.toString());
        }
    });
}

fs.mkdir("./views",(error)=>{
    if(error){
        console.log(error.toString());
    }
});


//delete files
if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("DELETED");
    });
}else{
    fs.writeFile("./docs/deleteme.txt","hello world",(err,data)=>{
    if(err){
        console.log(err.toString());
    }
    console.log("file has been written");
});
};

