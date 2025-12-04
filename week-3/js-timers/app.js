console.log("Hello World!");

//setTimeout(function () {
//console.log("This message appeared after 5 seconds");
//}, 5000);

//delay is in milliseconds

//setInterval(function () {
//console.log("Please drink water!");
//}, 3000);

//ctrl c to stop interval

const timerMessage = document.getElementById("timer-message");
const timerButton = document.getElementById("timer-button");

timerButton.addEventListener("click", function () {
  timerMessage.style.display = "flex";
  setTimeout(function () {
    timerMessage.style.display = "none";
  }, 5000);
});

const startStopButton = document.getElementById("start-stop-button");
const stopwatchArea = document.getElementById("stopwatch-area");

startStopButton.addEventListener("click", function () {
  let pause = 0;
  const stopwatchDisplay = document.createElement("p");
  stopwatchArea.appendChild(stopwatchDisplay);
  let i = 0;
  stopwatchDisplay.textContent = i;
  if ((pause = 0)) {
    pause = 1;
    startStopwatch(i);
  } else {
    stopwatchDisplay.remove();
    pause = 0;
  }
});

function startStopwatch(iValue) {
  setInterval(function () {
    iValue++;
  }, 1000);
}
