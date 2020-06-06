const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const W = readline();
    print(W.split('').reverse().join('') == W)
}
