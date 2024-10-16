let sample = [1, 2, 3, 4, 5];
const result = sample.filter(function(value, index, array){
    // 배열을 순회하면서 함수의 return이 true인 값만 모아 새로운 배열을 반환한다.
    if(value % 2 == 1) {
        return true;
    }
    return false;
})

console.log(result);
console.log(sample);
