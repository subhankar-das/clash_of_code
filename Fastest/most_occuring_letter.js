const words = readline();

var count = {};
function counts(string) {
    string.split('').forEach(function (s) {
        if (s != ' ') {
            count[s] ? count[s]++ : count[s] = 1;
        }
    });
    return count;
}

counts(words);

keysSorted = Object.values(count).sort((a, b) => count[b] - count[a])

console.log(keysSorted.sort((a,b)=>b-a)[0]); 