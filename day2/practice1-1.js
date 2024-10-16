console.log("정수를 입력해주세요. ");

// node.js 환경에서 진행할 경우.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const printFunc = (num) => {
    for(let hi of Array(num).fill("안녕")) {
        console.log(hi);
    }
}

rl.on('line', function(line){
    printFunc(parseInt(line));
    rl.close();
}) 



