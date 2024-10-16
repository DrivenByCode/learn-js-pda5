// function run() {
//     console.log('3초 후 실행');
// }

// console.log('시작');
// setTimeout(run, 3000); // 비동기 함수
// console.log('끝');

function fastFunction (err, data, done) {
    setTimeout(function () {
        done(undefined, data * 2);
    }, 1000) 
}

function slowFunction (err, data, done) {
    setTimeout(function () {
        console.log("slowFUnction 실행완료", data)
        done(undefined, data + 10);
    }, 3000)
}

function runTasks (callback) {
    fastFunction(undefined, 10, (err, data) => {
        if(err) return callback(err);
        console.log("fastFunction", data); // result of a: 10 * 2 = 20

        slowFunction(undefined, data, (err, data) => {
            if(err) return callback(err);
            console.log("slowFunction", data); // results of b: 20 + 10 = 30 30
        
            // here you can continue running more tasks
        })
    })

}

runTasks(err => {
    console.error(err);
})