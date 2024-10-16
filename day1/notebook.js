function sample() {
    console.log(name1);
    if(true) {
        var name1 = "jk"
    }
    console.log(name1);
}

// 에러 발생 안함. 호이스팅
sample();

// function sample() {
//     console.log(name1);
//     if(true) {
//         let name1 = "jk"
//     }
//     console.log(name1);
// }

// 에러 발생
// sample();

function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

console.log(min(2,3));