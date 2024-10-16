function createGreeting(greetingPrefix) {
    return function(name) {
        console.log(greetingPrefix + ", " + name + "!");
    };
}

const greetHello = createGreeting("Hello");
const greetHi = createGreeting("Hi");

greetHello("Alice"); // 출력: ???
greetHi("Bob"); // 출력: ???