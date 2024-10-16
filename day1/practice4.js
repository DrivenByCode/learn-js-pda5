function createIncrementer(start, step) {
    let num = start;
    function inner() {
        return num += step;
    }
    return inner;
}

const incByOne = createIncrementer(5,1);
console.log(incByOne()); // 6
console.log(incByOne()); // 7

const incByTen = createIncrementer(10, 10);
console.log(incByTen()); // 20
console.log(incByTen()); // 30