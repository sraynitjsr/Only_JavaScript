let myWeakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1));
console.log(myWeakSet.has(obj2));

myWeakSet.delete(obj1);

console.log(myWeakSet.has(obj1));
