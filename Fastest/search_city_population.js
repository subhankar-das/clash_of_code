const n = parseInt(readline());
arr = []
s = 0
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const city = inputs[0];
    const population = parseInt(inputs[1]);
    arr.push([city, population])
}
const search = readline();
for (i = 0; i < arr.length; i++) {
    if (arr[i][0].includes(search)) {
        s += arr[i][1]
    }
}
print(s)