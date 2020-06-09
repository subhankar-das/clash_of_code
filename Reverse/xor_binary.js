var inputs = readline().split(' ');
const n1 = inputs[0].toString(2);
const n2 = inputs[1].toString(2);

print((parseInt(n1,2) ^ parseInt(n2,2)).toString(2).padStart(n1.length, '0'))