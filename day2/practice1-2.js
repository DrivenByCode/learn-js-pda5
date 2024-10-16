console.log("정수를 입력해주세요. ");

// node.js 환경에서 진행할 경우.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    for(let i = 1; i <= parseInt(line); i++) {
        console.log('*'.repeat(i));
    }
    rl.close();
}) 



