console.log("Hello world");

let blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

blogPosts[3] = "My fourth blog post";
blogPosts[2] = "My third blog post re-made";

console.log(blogPosts);
console.log(blogPosts[2]);
console.log(blogPosts[3]);

const favouriteFoods = ["pizza", "steak", "burgers", "lasagne"];
const favouriteNumbers = [7, 4, 21];
const favouriteColours = ["purple", "blue", "black"];

console.log(favouriteFoods);
console.log(favouriteNumbers);
console.log(favouriteColours);

console.log(
  `My favourite food is ${favouriteFoods[0]}, my second favourite number is ${favouriteNumbers[1]} and my third favourite colour is ${favouriteColours[2]}`
);
