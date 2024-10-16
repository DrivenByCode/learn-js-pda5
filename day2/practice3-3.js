// node.js 환경에서 진행할 경우.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("정수를 입력해주세요:")

rl.on('line', function(line){
    const num = parseInt(line);
    for(let i = 1; i <= num; i++) {
        if(i % 3 == 0) {
            if(i % 5 == 0) {
                console.log("3과 5의 공배수")
            } else {
                console.log("3의 배수")
            }
        } else if(i % 5 == 0) {
            console.log("5의 배수")
        } else {
            console.log(i);
        }
    }
    rl.close();
}) 