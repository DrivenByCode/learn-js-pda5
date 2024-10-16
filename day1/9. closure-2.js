function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter1 = outer();
const counter2 = outer();


console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


// count 변수의 값이 메모리에 남아있기 때문에 메모리 누수가 발생 가능성