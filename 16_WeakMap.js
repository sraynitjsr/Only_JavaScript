let myWeakMap = new WeakMap();

let key1 = {};
let key2 = {};

myWeakMap.set(key1, "Value associated with key1");
myWeakMap.set(key2, "Value associated with key2");

console.log(myWeakMap.get(key1));
console.log(myWeakMap.get(key2));

myWeakMap.delete(key1);

console.log(myWeakMap.get(key1));
