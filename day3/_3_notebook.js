const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function fastFunction(data){
    await delay(1000);
    return data * 2;
}
async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    console.log("slowFunction Done");
    return result;
}
async function normalFunction(data){
    await delay(2000);
    return data / 2;
}

// 1-2번째 수행, 2-2번째 수행 중 뭐가 먼저 실행될지는 모른다
fastFunction(10).then(data=>{
    console.log("1-1번째 수행")

    return slowFunction(data);
}).then(result=>{
    console.log("1-2번째 수행")
})

fastFunction(10).then(data=>{
    console.log("2-1번째 수행")
    
    return slowFunction(data);
}).then(result=>{
    console.log("2-2번째 수행")
})