const Info = require('./Information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, my name is ${Info.name} and I'm from the ${Info.campus} Campus!`,
    e : "oO",
    T : "U "
}));