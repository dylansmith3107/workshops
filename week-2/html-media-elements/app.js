console.log("Hello World!");

const image = document.getElementById("mainImg");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const gif = document.getElementById("gif");

gif.addEventListener("load", function (event) {
  console.log("GIF loaded!", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});
audio.addEventListener("pause", function (event) {
  console.log("Audio paused", event);
});
audio.addEventListener("ended", function (event) {
  console.log("Audio finished", event);
});

const video = document.querySelector("video");

video.addEventListener("time", function (event) {
  console.log("Time event", event);
});
