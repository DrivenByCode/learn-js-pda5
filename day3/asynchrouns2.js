// fastFunction data*2 (1초)
// slowFunction data+10 (3초)
// initialData가 주어졌을 때, fastFunction -> slowFunction 
// slowFunction(fastFunction(initialData))

function fastFunction(data, callbackFn){
    return setTimeout(()=>{
        const result = data * 2
        console.log("fast", result);
        callbackFn(result)
    }, 1000)
}

function slowFunction(data, callbackFn){
    return setTimeout(()=>{
        const result = data + 10;
        console.log("slow", result);
        callbackFn(result);
    }, 3000)
}

// fastFunction -> slowFunction
// fastFunction(10, (data)=>{
//     const fastFunctionResult = data
//     slowFunction(fastFunctionResult, data=>{
//         const slowFunctionResult = data;
//         console.log("fast->slow", slowFunctionResult);
//     })
// })

// initialData: 30
// data: fastFunction -> slowFunction -> slowFunction -> fastFunction을 한 후
// console.log(data)를 출력하세요.

fastFunction(30, (data) => {
    const fastFunctionResult1 = data
    slowFunction(fastFunctionResult1, data => {
        const slowFunctionResult1 = data;
        slowFunction(slowFunctionResult1, data => {
            const slowFunctionResult2 = data;
            fastFunction(slowFunctionResult2, data => {
                const fastFunctionResult2 = data;
                console.log("final Data", fastFunctionResult2)
            })
        })
    })
}) 
