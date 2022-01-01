//conecting the html elements in js
const h1 = document.querySelector("h1");
const score = document.querySelector("h2");
const body = document.querySelector("body");
// the buttons
const playerOne = document.querySelector("#player_one");
const playerTwo = document.querySelector("#player_two");
const reset = document.querySelector("#reset");
let playerOneScore = 0;
let playerTwoScore = 0;
//0 - 100 drop list
const dropList = document.querySelector(".drop");

for (let i = 1; i <= 100; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  dropList.append(option);
}

dropList.addEventListener("change", startOver);

// when clicking on button
function playerOneClick() {
  playerOneScore += 1;
  if (playerOneScore == dropList.value) {
    score.innerHTML = "player 1 WON";

    removeListener();
  } else {
    score.innerHTML = `${playerOneScore} to ${playerTwoScore} `;
  }
}

function playerTwoClick() {
  playerTwoScore += 1;
  if (playerTwoScore == dropList.value) {
    score.innerHTML = "player 2 WON";
    removeListener();
  } else {
    score.innerHTML = `${playerOneScore} to ${playerTwoScore} `;
  }
}

// adding and removing listeners
function addListener() {
  playerOne.addEventListener("click", playerOneClick);
  playerTwo.addEventListener("click", playerTwoClick);
  reset.addEventListener("click", startOver);
}

function removeListener() {
  playerOne.removeEventListener("click", playerOneClick);
  playerTwo.removeEventListener("click", playerTwoClick);
}

// reset values
function startOver() {
  playerTwoScore = 0;
  playerOneScore = 0;
  score.innerHTML = "0 to 0";
  addListener();
}

addListener();
