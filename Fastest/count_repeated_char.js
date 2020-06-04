var count = {};
function countS(string) {  
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

let N = parseInt(readline());
let S = readline().toLowerCase();
S=S.split('')
S=S.sort().join('')
K=S.replace(/[^a-z+]+/gi,'')
countS(K)

for (let [key, value] of Object.entries(count)) {
  console.log(`${key}`.repeat(value));
}
