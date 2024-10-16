const obj1 = {
    "key": "value",
    city: "seoul",
    age: 12
}
console.log(`obj1['key']: ${obj1['key']}`)
console.log(`obj1['city']: ${obj1['city']}`)

console.log(`obj1.key : ${obj1.key}`)
console.log(`obj1.age: ${obj1.age}`)

const obj2 = {
    key: "value",
    city: "seoul",
    age: 12,
    obj3: {
        name: "dsfs"
    }
}

console.log(obj2.obj3.name);

console.log(obj2.parent?.name);

console.log(typeof(obj1));

console.log(Array.isArray(obj1));