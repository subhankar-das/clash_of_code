c=readline()
p=readline()
a=s=0
while(p--){x=+readline();s+=x;a<x?a=x:a}print(Math.ceil(s-c*a/100))