// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Outputs: 6
console.log(sum(1, 2, 3));

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Outputs: [1, 2, 3, 4, 5]
console.log(arr2);
