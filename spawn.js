const cp = require("child_process");

 const questionsApp = cp.spawn("node" , ["questions.js"]);

 questionsApp.stdin.write("Alex \n");
 questionsApp.stdin.write("Tahoe \n");
 questionsApp.stdin.write("Change the world \n");

 questionsApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`);
 });

 questionsApp.on("close", () =>{
    console.log(`questionApp process exited`);
 });