const reulst = min(10, -1); // 함수 선언문은 파싱하면서 맨 위로 올림. 함수, import, class, var/let/const 호이스팅
console.log(result)

const min = function(num1, num2) {
    if(num1 < num2) {
        return num1
    }
    return num2
}