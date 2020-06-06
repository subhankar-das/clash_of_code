n=readline().split(' ').map(i=>+i)

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
s=''
x=n.map(item=>item**2).filter(onlyUnique)
x=x.sort((a,b)=>a-b)
for(i=0;i<x.length;i++){
    s+=x[i]+', '
}
s=s.slice(0,-2)
print(`[${s}]`)