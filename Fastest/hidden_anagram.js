const isAnagram = (str1, str2) => {
  const normalize = str =>
      str
          .toLowerCase()
          .replace(/[^a-z0-9]/gi, '')
          .split('')
          .sort()
          // .join('');
  let x1 = normalize(str1);
  let x2 = normalize(str2);
  let len = 0;
  for (i = 0; i < x1.length; i++) {
      if (x2.includes(x1[i])) {
          const index = x2.indexOf(x1[i]);
              x2.splice(index, 1);
              len++
      }
  }
  if(len==x1.length) {
      return true;
  }
  else {
      return false;
  }

};
const w = readline();
const n = parseInt(readline());
let cnt = 0;
for (let i = 0; i < n; i++) {
  const s = readline();
  isAnagram(w, s) ? cnt++ : cnt;
}
print(cnt)