let sample = [1, 2, 3, 'a', 'b', 'c'];
sample.forEach(function(item, index, array) {
    console.log(`item: ${item}`);
    console.log(`index: ${index}`);
    console.log(`array: ${array}`);
    console.log('-'.repeat(10));
})