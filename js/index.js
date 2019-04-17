'use strict';

alert("Welcome to my page.");
alert("Answer a series of questions to be granted admittance. Good Luck!");

var guessNumbers = prompt("Let's play a guessing game; Think of a number between 1 and 20?").toLowerCase();
var yourCorrect = parseInt(guessNumbers);

if (yourCorrect === 13) {
  alert('You are Correct! Great Job, Are you ready for the next question?');
} else if (yourCorrect < 13); {
  alert('That is Not Correct! Sorry you will need to try again.');
} else (yourCorrect > 13); {
  
  alert('I guess it is back to the drawing board for you!');
}
// Gabriel - Below fused together my initial code with the code segment from class
var myFavoriteColor = prompt("This next question is a little tricky, what is my favorite color?").toLowerCase();
var gotItRight = parseInt(myFavoriteColor);

if (myFavoriteColor === "red").toLowerCase(); { // Gabriel - Question? Can you add concatenation to the descriptor or "red" like "red + blue + green"
  alert('Yay you got another one Correct! Red is my Favorite Color. How did you know?');
} else if (gotItRight > "red"); {
  alert('Sorry but your going to have to try again');
} else (gotItRight < "red").toLowerCase(); {
  alert("Please again? Hint... Everything is in lower case!");
}

var numberOfKids = prompt("This next question is a little tricky, what is my favorite color?").toLowerCase();
var reallyAgain = parseInt(numberOfKids);

if (numberOfKids === "3").toLowerCase(); {
  alert('Good guess, Are you sure your not google-ing me lol. How did you know?');
} else if (gotItRight === "3"); {
  alert('Sorry but you got it wrong this time!');
} else {
  alert("Nope, Keep trying!!!");

  var oldFart = prompt("Ok, I see you. Ok! Last One! How old am I?");
  var noWay = parseInt(oldFart);

  if (oldFart) = prompt("This one is tough! How old am I?").toLowerCase(); {
    alert("Dang, your pretty lucky, Wanna buy a lotto ticket for me?");
  } else if (noWay === 37); {
    alert('...You Shall NOT PASS!!! Try again!'); {
    } else {

      alert('That was your last shot too. Dang! Better luck next time!!!!');
      var guessesRemaining = 4;
      var userGuessedCorrectly = false;

      while (guessesRemaining > 0 && userGuessedCorrectly === false) {
        alert('');
        guessesRemaining--;
        alert('You have ' + guessesRemaining + ' attepmts');
      }
      if (userGuessedCorrectly) {
        alert('Congratulations');
      }
      else {
        alert('BOO!');
      }
