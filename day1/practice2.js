let a = " 90:30:80 ";
let [math, english, science] = a.trim().split(":");

// console.log(`math: ${math}`);
// console.log(`english: ${english}`);

// console.log(`science: ${science}`);


const average = (parseInt(math) + parseInt(english) + parseInt(science)) / 3;
console.log(`평균 점수는 ${parseInt(average)}점 입니다.`);