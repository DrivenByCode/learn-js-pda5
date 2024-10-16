let sample = [1, 2, 3, 'a', 'b', 'c'];
const result = sample.map(function(value, index, array){
    // map 함수는 인자를 함수로 받고 return값을 모아 새로운 배열을 반환한다.
    return value * 10;
}) 

console.log(`result ${result}`);

console.log(`sample ${sample}`);