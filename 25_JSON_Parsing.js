const jsonString = '{"name": "Sachin", "age": 50, "city": "Amchi Mumbai"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);
