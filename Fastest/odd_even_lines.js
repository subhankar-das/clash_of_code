const N = parseInt(readline());
odd = [], even = []

for (let i = 0; i < N; i++) {
    const line = readline();
    if(i%2!=0){
        odd.push(line)
    }
    else {
        even.push(line)
    }
}

for(i=0;i<even.length;i++){
    print(even[i])
}

for(i=0;i<odd.length;i++){
    print(odd[i])
}