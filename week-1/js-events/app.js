console.log("Hello, World!");

console.log(document);

const testButton = document.getElementById("test-button");
console.log(testButton);

testButton.addEventListener("click", function () {
  console.log("Button was clicked!");
});
testButton.addEventListener("mouseover", function () {
  console.log("Mouse is over the button!");
});

const header = document.getElementById("header");
console.log(header);
const main = document.getElementById("main");
console.log(main);
const footer = document.getElementById("footer");
console.log(footer);

const spiderManImage = document.createElement("img");
spiderManImage.src =
  "https://preview.redd.it/alex-ross-spider-man-v0-ymgnroixcalf1.jpeg?auto=webp&s=5fbc04f7e144c96ced28a245d33d78a26ec63b0a";
spiderManImage.style.width = "300px";
spiderManImage.style.height = "auto";
console.log(spiderManImage);
document.body.appendChild(spiderManImage);

spiderManImage.addEventListener("click", function () {
  const imageTitle = document.createElement("h2");
  imageTitle.textContent = "Spider-Man, illustrated by Alex Ross";
  document.body.appendChild(imageTitle);
});
