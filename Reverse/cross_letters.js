const N = parseInt(readline());
let s='', r=''
for (let i = 0; i < N; i++) {
    let x = readline();
    s+=x[i]
    r+=x[N-i-1]
}
print(s, r)