var inputs = readline().split(' ');
const pay = parseInt(inputs[0]);
const has = parseInt(inputs[1]);
const buy = parseInt(inputs[2]);
sum=0
for(i=1;i<=buy;i++){
    sum+=i*pay
}
(has > sum) ? print(0) : print(sum-has)