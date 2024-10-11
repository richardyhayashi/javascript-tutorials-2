let job = 'Software Developer';
//let job = 'Designer';
//let job = 'Cloud Engineer';
//let job = 'Sales';

// if (job === 'Software Developer') {
//   console.log('Writes code.');
// } else if (job === 'Designer') {
//   console.log('Makes user interface documents');
// }
// else if (job === 'Cloud Engineer') {
//   console.log('Manages & deploys cloud resources');
// } else {
//   console.log('Works directly with customers');
// }

switch (job) {
  case 'Software Developer':
    console.log('Writes code.');
    break;

  case 'Designer':
    console.log('Makes user interface documents');
    break;

  case 'Cloud Engineer':
    console.log('Manages & deploys cloud resources');
    break;

  default:
    console.log('Works directly with customers');
    break;
}