/*const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

console.log(text);*/

/*const fs = require("fs");
fs.readFile("./assets/Readme.md", "UTF-8", (err, text)=>{
    console.log("--------All files are read succesfully-----------------");
    console.log(text);
});*/


//read image
const fs = require("fs");
fs.readFile("./assets/vol.jpg", (err,img)=>{
    if(err){
        console.log(`An error occured: ${err.meessage}`);
        process.exit();
    }

    console.log("Imasge read succesfully");
    console.log(img);
});
