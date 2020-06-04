[n,m]=readline().split(' ')
x=n*m
for(i=m<n?Math.floor(m/2):Math.floor(n/2); i>0; i--){
if(x%(i*i)==0){console.log(x/(i*i))
break}}