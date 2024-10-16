function sample(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

// sample(1,2,3) // ok
// sample(1,2) // ok a:1, b:2, c:undefined
// sample() // ok a: undefined, b: undefined, c: undefined
// sample(1,2,3,4) // ok

let sample2 = [1,2,3,4]
const result = sample2.map(function(value, idx, arr) {
    return value * 10;
})
console.log(result);

const result2 = sample2.map(function(value, idx) {
    return value * 10
})

console.log(result2);

// map 함수 정의
function map(arr, mapFn){
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        const value = mapFn(arr[i], i, arr)
        result.push(value);
    }
    return result;
}

// js에서 arguments는 생략해도 된다.
const result5 = map(sample2, function(value){
    return value * 10
})
console.log(result5)