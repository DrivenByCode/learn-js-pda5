let arr = [1,3,5]
const result = arr.reduce((prev, cur, idx, arr)=>{
    return prev + cur
}, 0);

console.log(`result: ${result}`)

// practice1 - 브라우저에서만 작동
ask(() => confirm("동의하십니까?"),
    ()=> alert("동의"),
    ()=> alert("비동의")
);

function ask(askFun, acceptFun, refusalFun) {
    return askFun() ? acceptFun(): refusalFun();
}