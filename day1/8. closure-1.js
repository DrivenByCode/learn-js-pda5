function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2