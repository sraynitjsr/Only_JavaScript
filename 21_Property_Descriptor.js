let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  enumerable: false,
  configurable: false
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
