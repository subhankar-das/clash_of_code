let N = readline()
let se = so = 0

for(i=0;i<N.length;i++){
  i %2 == 0 ? se += +N[i] : so += +N[i]
}
print(se-so)