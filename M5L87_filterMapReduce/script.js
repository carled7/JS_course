let numbers = [1, 2, 3, 4, 5]

let oddNumbers = numbers.filter((value) => value % 2 != 0);

console.log(oddNumbers);

let doubleNumbers = numbers.map((value) => value * 2);

console.log(doubleNumbers);

let total = numbers.reduce(((previuosValue, value) => previuosValue += value), 1);

console.log(total);