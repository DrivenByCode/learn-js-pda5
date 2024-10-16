let y = {"math": 70, "science" : 80, "english": 20};

for(let key in y) {
    y[key] += 10;
}

console.log(y);