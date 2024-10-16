// 1번쨰 방법

// function limitCalls(func, n) {
//     while(n-- > 0) {
//         func();
//     }
// }

// const limitedHello = limitCalls(()=> console.log("Hello!"), 2);

// limitedHello;
// limitedHello;
// limitedHello;
// limitedHello;
// limitedHello;
// limitedHello;

// 2번째 방법

function limitCalls(func, n) {
    return () => {
        if(n === 0) {
            return;
        }
        func();
        n--;
    }
}

const limitedHello = limitCalls(()=> console.log("Hello!"), 2);

limitedHello();
limitedHello();
limitedHello();
limitedHello();