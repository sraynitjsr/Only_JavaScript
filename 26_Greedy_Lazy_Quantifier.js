const greedyRegex = /".*"/;
const greedyString = 'This is "greedy" and "greedy too"';
console.log(greedyString.match(greedyRegex));

const lazyRegex = /".*?"/;
const lazyString = 'This is "lazy" and "lazy too"';
console.log(lazyString.match(lazyRegex));
