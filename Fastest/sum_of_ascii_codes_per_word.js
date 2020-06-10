const line = readline();
let arr = line.split(' ');
let l = arr.length;
while (l > 0) {
    let sum = 0;
    let x = arr.shift();
    x.split('').map(item => {
        sum += item.charCodeAt(item)
    })
    l--;
    print(sum)
}
