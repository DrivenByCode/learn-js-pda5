let obj1 = {
    name: "신윤수",
    city: "서울"
}

// let obj2 = {
//     obj1, // same as "obj1:obj1"
//     hometown: "ulsan",
// }

let obj2 = {
    ...obj1, // same as "obj1:obj1"
    hometown: "ulsan",
}

console.log(obj2);