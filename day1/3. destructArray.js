const scores = ["60", "30", "20", "10", "40"];
const [math, english, ...rest] = scores;

console.log(math);

console.log(english);

console.log(`remained elements: ${rest}`);