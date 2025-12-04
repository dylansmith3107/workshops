console.log("Hello World!");

const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formUserData = new FormData(userForm);
  const userFormValues = Object.fromEntries(formUserData);
  console.log(userFormValues);
});

const hobbyForm = document.getElementById("hobby-form");

hobbyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formHobbyData = new FormData(hobbyForm);
  const hobbyFormValues = Object.fromEntries(formHobbyData);
  console.log(hobbyFormValues);
  const hobbyFormDiv = document.getElementById("hobby-form-div");
  const hobbyAnswers = document.createElement("p");
  hobbyAnswers.textContent = hobbyFormValues;
  hobbyFormDiv.appendChild(hobbyAnswers);
});
