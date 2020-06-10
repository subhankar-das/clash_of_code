n=readline()
x=[]
while(n--){x.push(readline())}x.sort((a,b)=>a.length-b.length).map(i=>print(i))