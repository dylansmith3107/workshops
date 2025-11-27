const person = {
  name: "Dylan",
  age: 22,
  favouriteColour: "purple",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello();

const staff = {
  staffName: "Manny",
  staffRole: "instructor",
  staffGreeting: function (greeting) {
    console.log(greeting);
  },
};

staff.staffGreeting("Hello!");

console.log(staff.staffName);

const car = {
  make: "Ford",
  model: "Fiesta",
  colour: "black",
  advert: function () {},
};
