const S = readline()
let k = ''
for(i=0;i<S.length;i++){
    if((i+1)%3==0){
        k+=S[i]
    }
}

console.log(k);