n=+readline()
if(n==0){print(0,0)}else{
s=c=0
for(i=1;i<=n;i++){s+=i
c++
if(s>n)break
}
print(c-1, n-(((c-1)*c)/2))}