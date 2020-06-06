let S = readline();
function swt(S) {
  let strArr = S.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 == 0) {
      strArr[i] = strArr[i + 1];
      strArr[i + 1] = S[i];
    }
  }
  return strArr.join('');
}

console.log(swt(S));