const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// await keyword는 async function 안에서만 쓸 수 있고
// await은 함수가 실행 완료 될 때 까지 기다림
// await는 그 후에있는 await 키워드가 있는 함수에 resolve값을 넘김
async function fastFunction(data) {
    await delay(1000);
    const result = data * 2;
    return result;
}

async function slowFunction(data) {
    await delay(3000);
    const result = data + 10;
    return result;
}

// async function runTasks() {
//     let result = await fastFunction(10);
//     console.log("result1", result)
//     result = await slowFunction(result);
//     console.log("작업완료", result);
// }

// const result = runTasks()
// console.log("runTask return", result)

// normaFunction (2초 후 2로 나누는)을 async function 정의
// fast -> normal -> slow -> fast 결과 출력

const initialData = 30

async function normalFunction(data) {
    await delay(2000)
    const result = data / 2
    return result
}

async function runTasks() {
    let result = await fastFunction(initialData);
    console.log("fastFunction done", result)
    result = await normalFunction(result);
    console.log("normalFunction done", result);
    result = await slowFunction(result)
    console.log("slowFunction done", result)
    result = await fastFunction(result)
    console.log("fastFunction done", result);
}

runTasks();