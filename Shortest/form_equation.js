e=o=0
x=~~(readline()/2)
p=readline().split(' ')
p.map(i=>{+i%2==0?e+=+i:o+=+i})
x=p[x]
print(`${e} x ${o} + ${x}^2 = ${e*o+x*x}`)