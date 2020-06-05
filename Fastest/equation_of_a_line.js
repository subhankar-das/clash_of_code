var inputs = readline().split(' ');
const x1 = parseInt(inputs[0]);
const y1 = parseInt(inputs[1]);
var inputs = readline().split(' ');
const x2 = parseInt(inputs[0]);
const y2 = parseInt(inputs[1]);

let slope = (y2-y1)/(x2-x1);
// y=mx+b
let b=y1-(slope*x1)
let b2=y2-(slope*x2)

// print(x1,y1, x2,y2, slope, b)
b>0 ? print(`${slope}*x+${b}`) : print(`${slope}*x${b}`)