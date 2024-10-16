function fastFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data * 2;
            console.log("fastFunction done", result);
            resolve(result)
        }, 1000)
    })
}

function slowFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data + 10;
            console.log("slowFunction done", result);
            resolve(result)
        }, 3000)
    })
}

// slow -> fast -> fast -> slow 결과  출력

// const initialData = 30
// slowFunction(initialData).then((data) => {
//     return fastFunction(data)
// }).then((data) => {
//     return fastFunction(data)
// }). then((data) => {
//     return slowFunction(data)
// })

// 2초 후에 실행하는 normalFunction <data를 2로 나누는>을 만들기
// slow -> normal -> fast -> 결과 출력(initialData: 100)
initialData = 100
function normalFunction(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data / 2;
            console.log(`normalFunction done ${result}`)
            resolve(result)
        }, 2000)
    })
}

slowFunction(initialData).then((data) => {
    return normalFunction(data)
}).then((data) => {
    return fastFunction(data)
})