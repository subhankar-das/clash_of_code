a=readline().split` `.map(i=>+i)
k=1
a.map(i=>{s=0;while(i){s+=i%10;i=Math.floor(i/10)}
k*=s})
print(k)