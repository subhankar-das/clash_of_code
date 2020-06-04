
function indexOfSmallest(a) {
  return a.reduce(function (lowest, next, index) {
      return next < a[lowest] ? index : lowest;
  },0);
}

const N = parseInt(readline());
arr = [], newarr = []
for (let i = 0; i < N; i++) {
  arr.push(readline().split(' '))

}
newarr = arr.map(item => {
  return item[0] * item[1]
})
console.log(indexOfSmallest(newarr)+1);
