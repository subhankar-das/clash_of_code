s=0
t=readline().split(' ').sort((a,b)=>a-b)
t.map(i=>s+=+i)
l=t.length
d=Math.floor(l/2)
print(l%2==0?Math.ceil(s/l):t[d])