s=readline()
if(s.slice(-1)=='_')s=s.slice(0,-1)
print(s.replace(/_(\w)/g,m=>m[1].toUpperCase()))

// better soln
print(readline().replace(/_.?/g,s=>(s[1]||'').toUpperCase()))