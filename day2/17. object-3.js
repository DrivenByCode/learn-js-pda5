let options = {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2'
}

// width: w 에서 w는 alias고, width는 이제 사용못함
const {width: w, height, ...rest} = options;
// console.log(width);
console.log(height);
console.log(rest);
console.log(w);