console.log("Hello World!");

for (let i = 1; i <= 4; i++) {
  console.log(
    `This is a task repeated multiple times. Check how many --> ${i}`
  );
}

for (let i = 1; i <= 5; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = `Paragraph ${i}`;
  const container = document.getElementById("p-container");
  container.appendChild(paragraph);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = false;
let i = 1;
while (keepLooping === false) {
  console.log("Iteration", i);
  keepLooping = Math.random() < 0.1;
  i++;
}

const favouriteFoods = ["pizza", "burgers", "lasagne", "enchiladas"];
for (let i = 0; i < favouriteFoods.length; i++) {
  console.log(favouriteFoods[i]);
}

for (let food of favouriteFoods) {
  console.log(food);
}

favouriteFoods.forEach(function (food, index) {
  console.log(index, food);
});

const favouriteAnimals = ["dogs", "monkeys", "cats", "hamsters", "wolves"];
for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(favouriteAnimals[i]);
}

const favouriteColours = ["purple", "blue", "black", "red", "green"];
favouriteColours.forEach(function (colour, index) {
  console.log(index, colour);
});

const favouriteNumbers = [7, 4, 21, 69, 420];
let i = 0;
while (i <= favouriteNumbers.length) {
  console.log(favouriteNumbers[i]);
  i++;
}
