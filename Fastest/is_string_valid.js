const u = readline();
len = u.length
pat = /^[A-Za-z0-9]+$/;
if (len >= 3 && len <= 20) {
  if (u.match(pat)) {
    print('VALID')
  }
  else {
    print('INVALID')
  }
}
else {
  print('INVALID')
}
