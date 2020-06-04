let a = readline();
let b = a.split('').reverse().join('');
let s = ''

for(i=0;i<a.length;i++){
    s+=a[i] + b[i]
}

print(s.slice(0,a.length))