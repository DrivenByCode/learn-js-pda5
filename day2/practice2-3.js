// node.js 환경에서 진행할 경우.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("정수를 입력해주세요:")

rl.on('line', function(line){
    const num = parseInt(line);
    for(let i = 1; i <= 9; i++) {
        console.log(`${num}*${i}=${num*i}`);
    }
    rl.close();
}) 