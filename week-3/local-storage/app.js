console.log("Hello World!");

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");
  const backgroundColour = formData.get("backgroundColour");

  const preferences = {
    colour,
    backgroundColour,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));

  if (preferences) {
    const colourInput = document.getElementById("colour-input");
    colourInput.value = preferences.colour;
    const backgroundInput = document.getElementById("background-input");
    backgroundInput.value = preferences.backgroundColour;
  }

  loadPreferences();
});

function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  if (preferences) {
    const colourInput = document.getElementById("colour-input");
    colourInput.value = preferences.colour || "#000000";
    const backgroundInput = document.getElementById("background-input");

    const body = document.querySelector("body");
    body.style.color = preferences.colour || "#000000";
    body.style.backgroundColor = preferences.backgroundColour || "#ffffffff";
  }
}

loadPreferences();

const defaultButton = document.getElementById("default-button");

defaultButton.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.removeItem("preferences");

  changeToDefault();
});

function changeToDefault() {
  const defaults = {
    colour: "#000000",
    backgroundColor: "#ffffff",
  };
  const body = document.querySelector("body");
  body.style.color = defaults.colour;
  body.style.backgroundColor = defaults.backgroundColor;
}
