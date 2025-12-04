console.log("Hello World!");

async function getFoxData() {
  const response = await fetch("https://randomfox.ca/floof/");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

//getFoxData();

const foxContainer = document.getElementById("fox-container");

function createFoxImage(foxUrl) {
  const image = document.createElement("img");
  image.src = foxUrl.image;
  image.alt = "A random fox, quite possibly a cute one";
  image.className = "fox-image";
  foxContainer.appendChild(image);
}

async function renderFox() {
  const foxData = await getFoxData();
  createFoxImage(foxData);
}

renderFox();

async function getRepoData1() {
  const repoResponse1 = await fetch(
    "https://api.github.com/repos/dylansmith3107/week01-assignments"
  );
  console.log(repoResponse1);
  const repoData1 = await repoResponse1.json();
  console.log(repoData1);
  return repoData1;
}

getRepoData1();

async function getRepoData2() {
  const repoResponse2 = await fetch(
    "https://api.github.com/repos/dylansmith3107/week02-assignments"
  );
  console.log(repoResponse2);
  const repoData2 = await repoResponse2.json();
  console.log(repoData2);
  return repoData2;
}

getRepoData2();

const stargazersCount = document.getElementById("stargazers-count");

function createStargazerCount(stargazerCount1, stargazerCount2) {
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = stargazerCount1.stargazers_count;
  stargazersCount.appendChild(paragraph1);
  const paragraph2 = document.createElement("p");
  paragraph2.textContent = stargazerCount2.stargazers_count;
  stargazersCount.appendChild(paragraph2);
}

async function renderParagraph() {
  const paragraphData1 = await getRepoData1();
  const paragraphData2 = await getRepoData2();
  createStargazerCount(paragraphData1, paragraphData2);
}

renderParagraph();
