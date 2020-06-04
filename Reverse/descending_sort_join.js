const N = parseInt(readline());
let arr=[],cnt=0;
var inputs = readline().split(' ');

for (let i = 0; i < N; i++) {
    arr.push((inputs[i]))
}

arr.sort((a,b)=>+b-+a)

arr.map(item=>{
    item==0?cnt++:cnt
})

cnt==N ? print(0) : print(arr.join(''))
