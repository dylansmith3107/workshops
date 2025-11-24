console.log("Hello");

function sayHello() {
  console.log("Hello World");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(username) {
  console.log(`Hello ${username}!`);
}

sayHelloTo("Dylan");
sayHelloTo("Michael");
sayHelloTo("Claire");
sayHelloTo("Dan");

function add(a, b) {
  return a + b;
}

const result = add(2, 7);
console.log(`The result is ${result}`);
const anotherResult = add(4, 2);
console.log(`Another result is ${anotherResult}`);

function multiply(a, b) {
  return a * b;
}

const resultM = multiply(2, 7);
console.log(`The result is ${resultM}`);

function divide(a, b) {
  return a / b;
}

const resultD = divide(14, 2);
console.log(`The result is ${resultD}`);

function subtract(a, b) {
  return a - b;
}
const resultS = subtract(7, 5);
console.log(`The result is ${resultS}`);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

console.log(`This result is ${calculate(1, 5, "+")}`);

console.log(`Another result is ${calculate(20, 4, "/")}`);

function convert(distance, unit) {
  if (unit === "M") {
    return distance * 1.609;
  } else if (unit === "KM") {
    return distance / 1.609;
  }
}
console.log(`The result is ${convert(7, "M")}KM`);
console.log(`The result is ${convert(7, "KM")} miles`);
