/*const counter = require("./myModule");
counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());*/

const {inc,dec,getCount} = require("./myModule");
inc();
inc();
inc();
dec();
console.log(getCount());