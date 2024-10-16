const min = (num1, num2) => {
    if(num1 < num2) {
        return num1;
    }
    return num2;
}

const result = min(10, -1);
console.log(result);

const min2 = (num1, num2) => {
    return num1 < num2 ? num1 : num2;
}

const min3 = (num1, num2) => num1 < num2 ? num1 : num2;

console.log(min3(2,9));