// node.js 환경에서 진행할 경우.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 3;

rl.on('line', function(line){
    count--;
    
    if(count == 0) {
        rl.close();
    }

    if(line > 65) {
        console.log(true);
    } else {
        console.log(false);
    }
}) 

