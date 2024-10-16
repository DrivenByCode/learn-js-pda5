const printMultipletable = (num) => {
    console.log(`--------${num}단 -------`)
    for(let i = 1; i <= 9; i++) {
        console.log(`${num}*${i} = ${num*i}`)
    }
}

for(let i = 1; i <= 9; i++) {
    printMultipletable(i);
}