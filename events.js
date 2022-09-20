const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message,user) => {
    console.log(`${user}: ${message}`);
});

process.stdin.on("data", data =>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent" , "GoodBye" , "process");
        process.exit();
    }
    emitter.emit("customerEvent" , input , "terminal");
});

//emitter.emit("customEvent", "Hello World" , "Computer");
//emitter.emit("customEvent" , "That's pretty cool Huh?" , "Alex");