'use strict';

var correctGuesses = 0;

alert('Welcome to my page.');
var username = prompt('Tell me your name.');
alert('excellent, ' + username + ' Answer a series of questions to be granted admittance. Please answer yes or no! Good Luck!'); // this is concantenation

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionOne(){
  var answerOne = prompt('Do I have kids?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y'){
    alert('correct');
    console.log('answerOne', answerOne);
    correctGuesses++;
  } else {
    alert ('incorrect');
    console.log('user answer question one inccorectly');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionTwo(){
  var answerTwo = prompt ('Am I in school').toLowerCase();
  if(answerTwo === 'yes' || answerTwo === 'y'){
    alert('correct');
    console.log('answerTwo', answerTwo);
    correctGuesses++;
  } else {
    alert ('incorrect');
    console.log('user answer question one inccorectly');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionThree(){
  var answerThree = prompt ('Am I in 201?').toLowerCase();
  if(answerThree === 'yes' || answerThree === 'y'){
    alert('correct');
    console.log('answerThree', answerThree);
    correctGuesses++;
  } else {
    alert ('incorrect');
    console.log('user answer question one inccorectly');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionFour(){
  var answerFour = prompt ('Am I an alien?').toLowerCase();
  if(answerFour === 'yes' || answerFour === 'y'){
    alert('correct');
    console.log('answerFour', answerFour);
    correctGuesses++;
  } else {
    alert ('incorrect');
    console.log('user answer question one inccorectly');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionFive(){
  var answerFive = prompt ('Do I like food?').toLowerCase();
  if(answerFive === 'yes' || answerFive === 'y'){
    alert('correct');
    console.log('answerFive', answerFive);
    correctGuesses++;
  } else {
    alert ('incorrect');
    console.log('user answer question one inccorectly');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionSix(){
  var counterSix = 6;
  while(counterSix > 6 && answerSix !== 6){
    var answerSix = Number(prompt('guess and number between 1 and 10, guesses remaining: ' + counterSix));
    console.log('answerSix', answerSix);
    counterSix--; // remember this decrements

    if(answerSix === 6){
      alert('correct');
      console.log('user got answer six correct');
      correctGuesses++;
    } else if(answerSix > 6){
      alert('Incorrect it is too high');
      console.log('incorrect user answer is too low');
    } else if(answerSix < 6){
      alert('Incorrect it is too high');
      console.log('incorrect user answer is too low');
    }
    if(counterSix === 0){
      alert('incorrect your out of guesses!');
    }
  }
}
//////////////////////////////////////////////////////////////////////////////
function questionSeven(){
  var counterSeven = 6;
  var statesIveLivedIn = ['washington', 'hawaii', 'california'];
  var attemptsRemaining = true;

  while(counterSeven > 0 && attemptsRemaining) {
    var answerSeven = prompt('Can you guess a state I have lived in?').toLowerCase();
    console.log('answerSeven', answerSeven);
    // Revisit Array Iteration
    for (var i = 0; i < statesIveLivedIn.length; i++){
      if(answerSeven === statesIveLivedIn[i]){
        alert('correct');
        console.log('user got answer correct');
        correctGuesses++;
        attemptsRemaining = false;
      }
    }
    counterSeven--;

    if(counterSeven > 0 && attemptsRemaining) {
      alert('inccorect, remaining guesses: ' + counterSeven);
      console.log('user got question seven incorrect');
    }
    if(counterSeven === 0){
      alert('incorrect, you are out of guesses');
      console.log('user got answer seven wrong');
    }
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert('Congradulations, ' + username + 'You got ' + correctGuesses + 'Answers correct!');
