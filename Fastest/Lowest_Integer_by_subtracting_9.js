let N = readline();
let s = '', last = 0
while (N > 0) {
  last = N % 10
  if (last > Math.abs(9 - last)) {
    s += (Math.abs(9 - last))
  }
  else {
    s += last
  }
  N = Math.floor(N / 10)
}
console.log(s.split('').reverse().join(''));