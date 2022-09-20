//creating flags
const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
//command
//node globalProcess --user ned --greeting "Sithum Raveesha"
//node globalProcess --greeting Sithum --user Raveesha  
// In this case --greeting part excute ffirst and then --user

//Argument variables
//const [,,firstName,lastName] = process.argv;
//console.log(`Your name is ${firstName} ${lastName}`);

//console.log(process.argv);  //node globalProcess  gives the path to the file

 
// console.log(process.pid);
//console.log(process.versions.node);
//commands
// node globalProcess  (globalProcess is the file name)