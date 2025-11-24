console.log("Hello, World!");
let myName = "Dylan";
const age = 22;
let isStudent = true;
let apples = 7;
let oranges = 4;
let bananas = 5;
let totalFruits = apples + oranges + bananas;
let applesOranges = apples + oranges;
let applesBananas = apples + bananas;
let orangesBananas = oranges + bananas;

console.log(myName);
console.log(age);
console.log(isStudent);

console.log(`My name is ${myName} and I am ${age} years old`);
console.log(isStudent);
console.log(
  `My name is ${myName} and I am ${age} years old. I have ${apples} apples, ${oranges} oranges and ${bananas} bananas. The toal amount of fruits I have is ${totalFruits}`
);
console.log(
  `For apples and oranges, I have ${applesOranges}, for apples and bananas, I have ${applesBananas}, and for oranges and bananas, I have ${orangesBananas}`
);

apples = 12;
oranges = 8;
bananas = 15;
totalFruits = apples + oranges + bananas;

console.log(
  `My number of fruits have changed! I now have ${apples} apples, ${oranges} oranges and ${bananas} bananas. My new total is ${totalFruits}`
);

console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);

let undefinedTest;
console.log(typeof undefinedTest);

let nullTest = null;
console.log(nullTest);
console.log(typeof nullTest);

let a = 400;
let b = 2;
let isAGreaterThanB = a > b;
let isBGreaterThanA = b > a;
let isAEqualToB = a === b;

console.log(isAGreaterThanB);
console.log(isBGreaterThanA);
console.log(isAEqualToB);

console.log(`${a} is greater than ${b}? ${isAGreaterThanB}`);
console.log(`${b} is greater than ${a}? ${isBGreaterThanA}`);
console.log(`${a} is equal to ${b}? ${isAEqualToB}`);
