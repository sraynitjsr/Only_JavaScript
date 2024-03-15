const defaultValue = "Default Value";
let variable1 = null;
let variable2 = undefined;
let variable3 = "Some Value";

console.log(variable1 ?? defaultValue);
console.log(variable2 ?? defaultValue);
console.log(variable3 ?? defaultValue);

function greet(name) {
    name = name ?? "Guest";
    console.log(`Hello, ${name}!`);
}

greet();
greet("Tufan");
greet(null);
