let arr = [1,2,3];
let arr2 = ['a', 'b', 'c']
// let arr3 = [arr, arr2]
// console.log(arr3);
// console.log(arr3.length); // 2

let arr3 = [
    ...arr,
    ...arr2
]

console.log(arr3);