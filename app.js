//console.log('Hello Node');

// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// make the program look dynamic
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';



// one way of doing this.  But we want to try using the arrow functions
// const printProfileData = (profileDataArr) => {
//   console.log(profileDataArr);
// };

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   // profileDataArr.forEach((profileItem) => {
//   //   console.log(profileItem)
//   // });
//   // this is the same as the above function set up, but instead setup with the arrow function
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };
//printProfileData(profileDataArgs);

// -------------------------------------- Lesson 1 above, below provided what we should move forward with--------------
// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// -------------lesson 2 -------------------
const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);
//const profileDataArgs = process.argv.slice(2, process.argv.length);

// saving the inputs that are entered into the array into variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// make this into one line:
const [name, github] = profileDataArgs;

// first arguement is the file name that will be created.  the second is the data
// that is being written (html string template).  The third is the callback function
// that will handle any errors as well as a success message.
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});