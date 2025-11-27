const person = {
  name: "Dylan",
  age: 22,
  favouriteColour: "purple",
};

console.log(person);
console.table(person);

person.favouriteFood = "pizza";

console.log(person.favouriteFood);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Dylan",
    age: 22,
    favouriteColour: "purple",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is a blog post about learning objects and arrays",
};

console.log(blogPost);

console.log(blogPost.author.age);
console.log(blogPost.tags[2]);

const car = {
  make: "Ford",
  model: "Fiesta",
  colour: "black",
};

console.log(car);

const book = {
  title: "Spider-Man: Kraven's Last Hunt",
  numberOfPages: 145,
  author: {
    name: "J.M. DeMatteis",
    age: 71,
  },
  artist: {
    name: "Mike Zeck",
    age: 76,
  },
  genres: ["superhero", "psychological thriller", "horror", "drama"],
  publisher: "Marvel Comics",
};

console.log(book);
