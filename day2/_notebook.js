let age = 10;
let message = (age < 3) ? '무료입니다':
    (age < 18) ? '청소년입니다.' :
    (age < 100) ? '감사합니다.':
    '나이가 아주 많으시군요.';

console.log(message)

let str1 = '1'

switch(str1) {
    case '1':
        console.log('1 입력');
        break;
    case "2":
        console.log("2 입력");
        break;
    case "3":
        break;
    case 3:
        console.log("3입력");
        break;
    default:
        console.log("default");
        break;
}

const obj1 = {
    a:1,
    b:2,
    c:3
}

for(let key in obj1) {
    console.log(key);
}

const arr1 = ['a', 'b', 'c'];
// for(let idx in arr1) {
//     console.log(idx);
// }

for(let item of arr1) {
    console.log(item);
}

// let jsonData = '{"key": "value"}'
let jsonData = '{"key"}'

// 1. JSON.parse(jsonData): json을 Parsing해서 JS-Object로
// 2. JSON.stringify(jsObject): JS-Object -> json 형태로
try {
const data = JSON.parse(jsonData);
console.log(data);
console.log(data.key);
} catch(err) {
    // console.error(err);
    if(err instanceof SyntaxError) {
        console.log('this is syntax error');
    } else if(err instanceof RangeError) {
        console.log('this is range error');
    }
}

function raiseError() {
    const a = 10;
    const error = new Error("문제가 발생했습니다.");
    throw error;
}

function mainModule() {
    const a = raiseError();
}

console.log(mainModule());

try {
    mainModule();
} catch(err){
    // err에는 두가지 키. // message, stack
    console.log(err.message);
    console.log("0".repeat(10));
    console.log(err.stack);
}