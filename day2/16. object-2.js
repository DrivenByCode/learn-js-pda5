let arr = ["Kim", "Shin"]

let [name1, name2] = arr;

console.log(name1, name2);

let arr2 = ["a", "b", "c", "d", "e"];

let [v1, v2, ...v3] = arr2;

console.log(v1);
console.log(v2);
console.log(v3);

let [sample1, sample2] = arr2;
console.log(sample1, sample2); // 앞에 두개의 요소만 가져오고 나머지는 버린다.