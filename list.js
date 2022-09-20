const fr = require("fs");
fr.readdir("./assets",(err,files)=>{
    if(err){
        throw err;
    }
    console.log("complete");
    console.log(files);
});

console.log("started reading files");