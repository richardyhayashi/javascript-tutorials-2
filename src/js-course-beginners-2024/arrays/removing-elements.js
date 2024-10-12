const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();
console.log(`lastElement: ${lastElement}\n`);

const firstElement = numbers.shift();
console.log(`firstElement: ${firstElement}`);

const middleElement = numbers.splice(1, 1);
console.log(`middleElement: ${middleElement}`);
