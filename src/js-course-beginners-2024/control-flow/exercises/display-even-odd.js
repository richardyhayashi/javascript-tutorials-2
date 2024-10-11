function displayEven(numArray) {
  for (const number of numArray) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

function displayOdd(numArray) {
  for (const number of numArray) {
    if (number % 2 != 0) {
      console.log(number);
    }
  }
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
displayEven(numArray);
console.log("");
displayOdd(numArray);