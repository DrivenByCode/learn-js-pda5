const KEY = "SAMPLE"
let johnProfile = {
    name: "John",
    sayHi: function() {
        console.log(this.name, ": 친구야 반갑다.");
    },
    [KEY]: "sampleValue",
}

// console.log(johnProfile.name)
// console.log(johnProfile['name'])
// johnProfile.sayHi()
console.log(johnProfile.SAMPLE)