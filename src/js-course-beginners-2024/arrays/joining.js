// const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = numbers.join(', ');
// console.log(joinedNumbers);

const courseName = 'JavaScript for Beginners';

// const lowercaseCourseName = courseName.toLowerCase();
// const parts = lowercaseCourseName.split(' ');
const parts = courseName
                .toLowerCase()
                .split(' ');

const urlSlug = parts.join('-');
console.log(urlSlug);