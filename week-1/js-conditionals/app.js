console.log("Hello, World!");

let age = 17;
let movieRating = "15";
let parentalConsent = true;

if (age > 17) {
  console.log("You can watch the movie");
} else if (movieRating === "U") {
  console.log("You can watch the movie");
} else if (age < 18 && age > 14 && movieRating !== "18") {
  console.log("You can watch the movie.");
} else if (
  age < 15 &&
  age > 11 &&
  movieRating !== "18" &&
  movieRating !== "15"
) {
  console.log("You can watch the movie.");
} else if (
  age < 12 &&
  age > 8 &&
  movieRating !== "18" &&
  movieRating !== "15" &&
  movieRating !== "12"
) {
  console.log("You can watch the movie.");
} else if (
  age < 8 &&
  parentalConsent === true &&
  movieRating !== "18" &&
  movieRating !== "15" &&
  movieRating !== "12"
) {
} else {
  console.log("You cannot watch the movie.");
}
