
// declare variable of 6
var x = 6;

// random number between 1 ~ 6
var randomNumber1 = Math.floor(Math.random() * x) + 1;
var randomNumber2 = Math.floor(Math.random() * x) + 1;

// declare variables of document class
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

// declare variables of h1
var winnerTitle = document.querySelector("h1");

// set attributes of both image classes
image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// If statement to decide who is the winner of the DICE!
if (randomNumber1 > randomNumber2) {
  winnerTitle.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  winnerTitle.innerHTML = "Player 2 Wins!";
} else {
  winnerTitle.innerHTML = "Draw!";
}
