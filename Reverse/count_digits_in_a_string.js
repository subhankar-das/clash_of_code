const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const ROW = readline();
    print(ROW.replace(/[^0-9]/g,"").length);
}