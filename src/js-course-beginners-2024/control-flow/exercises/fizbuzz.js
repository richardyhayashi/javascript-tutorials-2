function fizzBuzz(number) {
  let rtnValue = '';

  if (number % 3 === 0) {
    rtnValue += 'Fizz';
  }
  if (number % 5 === 0) {
    rtnValue += 'Buzz';
  }
  
  return rtnValue ? rtnValue : number;
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));