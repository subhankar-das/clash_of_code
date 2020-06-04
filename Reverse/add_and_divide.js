L = parseInt(readline());
M = parseInt(readline());
N = parseInt(readline());

s=0
d=0
f=L
g=L
a=[L]
b=[L]

for(i=0;i<N-1;i++){
    s=f+M
    f=s
    a.push(s)
}
for(i=0;i<N-1;i++){
    s=g/M
    g=s
    b.push(s)
}

print(a.join(' '))
print(b.join(' '))