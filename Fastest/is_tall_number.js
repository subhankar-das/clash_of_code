let n = readline();
n=n.split('')
let cnt = 0;
for(i=0;i<n.length;i++){
    if(n[i+1]>=n[i]) {
        cnt++;
    }
}
print(cnt==n.length-1)