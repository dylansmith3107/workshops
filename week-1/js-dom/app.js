console.log("Hello, World!");

console.log(document);
console.dir(document);

const body = document.body;
console.log(body);

const header = document.querySelector("header");
console.log(header);
const main = document.querySelector("main");
console.log(main);
const footer = document.querySelector("footer");
console.log(footer);

const mainTitle = document.createElement("h1");
console.log(mainTitle);

mainTitle.textContent = "Using The DOM!";

const image = document.createElement("img");
image.src =
  "https://i.etsystatic.com/31686170/r/il/c64137/4190609670/il_570xN.4190609670_qm6q.jpg";
image.alt = "Cool drawing of Spider-Man illustrated by Mark Bagley";

const imageTitle = document.createElement("h2");
imageTitle.textContent = "Spider-Man by Mark Bagley";

console.log(image);
console.log(imageTitle);

header.appendChild(mainTitle);
main.appendChild(imageTitle);
main.appendChild(image);

const list = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "Spider-Man is my favorite superhero.";
const li2 = document.createElement("li");
li2.textContent =
  "My favourite Spider-Man movie is Spider-Man into the Spider-Verse";
const li3 = document.createElement("li");
li3.textContent =
  "My favourite Spider-Man TV show is The Spectacular Spider-Man";

console.log(list);
console.log(li1);
console.log(li2);
console.log(li3);

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

main.appendChild(list);

image.style.width = "300px";
image.style.length = "300px";

body.style.fontFamily = "monospace";
mainTitle.style.textAlign = "center";
list.style.border = "2px solid purple";
list.style.backgroundColor = "lavender";
