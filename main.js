var minSelect = document.querySelector('#minimum');
var maxSelect = document.querySelector('#maximum');
var updateButton = document.querySelector('#update-button');
var newMin = parseInt(minSelect.value);
var newMax = parseInt(maxSelect.value);
var randomInteger = 0;

var playerOneName = document.getElementById('challenger-one-name');
var playerTwoName = document.getElementById('challenger-two-name');
var playerOneGuess = document.getElementById('ply-one-guess');
var playerTwoGuess = document.getElementById('ply-two-guess');

var nameReplaceOne = document.getElementById('chlg-one-name');
var nameReplaceTwo = document.getElementById('chlg-two-name');
var guessReplaceOne = document.getElementById('ply-one-pink');
var guessReplaceTwo = document.getElementById('ply-two-pink');
var lowHighOne = document.getElementById('low-or-high-one');
var lowHighTwo = document.getElementById('low-or-high-two');
var submitGuessButton = document.getElementById('submit-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

var winningPlayer = '';

updateButton.addEventListener('click', updateClick);
submitGuessButton.addEventListener('click', changeBottomText);
resetButton.addEventListener('click', randomNumGenerate);

function randomNumGenerate () {
  newMin = parseInt(minSelect.value);
  newMax = parseInt(maxSelect.value);
  randomInteger = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

function replaceMin () {
  var newMin = parseInt(minSelect.value);
  if (newMin >= parseInt(maxSelect.value)) {
    alert('Max Range must be larger than Min Range');
    return false;
  }
  else if (newMin === undefined) {
    return document.querySelector('#min-value').innerText = 1;
  }
  else {
    return document.querySelector('#min-value').innerText = newMin;
  }
}

function replaceMax () {
  var newMax = parseInt(maxSelect.value);
  if (newMax === undefined) {
    return document.querySelector('#min-value').innerText = 100;
  }
    else {
      return document.querySelector('#max-value').innerText = newMax;
}}

function updateClick () {
  randomNumGenerate ();
  replaceMin ();
  replaceMax ();
}

function changeBottomText () {
  if (playerOneName.value == undefined) {
     nameReplaceOne.innerText = 'Challenger 1';
  }
  else {
    nameReplaceOne.innerText = playerOneName.value;
  }
  if (playerTwoName.value == undefined) {
    nameReplaceTwo.innerText = 'Challenger 2';
  }
  else {
      nameReplaceTwo.innerText = playerTwoName.value;
  }
  // split to different function?
  guessReplaceOne.innerText = parseInt(playerOneGuess.value);
  guessReplaceTwo.innerText = parseInt(playerTwoGuess.value);
  if (parseInt(playerOneGuess.value) < randomInteger) {
    lowHighOne.innerText = "That's too low"
  }
  if (parseInt(playerOneGuess.value) > randomInteger) {
    lowHighOne.innerText = "That's too high"
  }
  if (parseInt(playerOneGuess.value) === randomInteger) {
    lowHighOne.innerText = 'BOOM!'
    winningPlayer = playerOneName.value;
    winner (winningPlayer);
  }
  if (parseInt(playerTwoGuess.value) < randomInteger) {
    lowHighTwo.innerText = "That's too low"
  }
  if (parseInt(playerTwoGuess.value) > randomInteger) {
    lowHighTwo.innerText = "That's too high"
  }
  if (parseInt(playerTwoGuess.value) === randomInteger) {
    lowHighTwo.innerText = 'BOOM!'
    winningPlayer = playerTwoName.value;
    winner (winningPlayer);
  }
}

function winningBox (winningPlayer) {
  return ('<div class="right-boxes">' +
    '<h4 class="results-box" id="winner-box-name-one">' +
      playerOneName.value +
    '</h4>' +
    '<p id="vs" class="results-box">' + 'VS' + '</p>' +
    '<h4 class="results-box" id="winner-box-name-two">' +
      playerTwoName.value +
    '</h4>' +
    '<div class="horizontal-line">' +
    '</div>' +
    '<h5 id="winner-name">' +
      winningPlayer +
    '</h5>' +
    '<h6 class="winner">' +
      'WINNER' +
    '</h6>' +
    '<div class="horizontal-line">' +
    '</div>' +
    '<p id="guess-amount">' +
    '<strong>' + 47 + '</strong>' +
      'GUESSES' +
    '</p>' +
  '</div>');
}

function winner (playerName) {
  // append elements to site-rite.
    var siteRight = document.querySelector('.site-right');
    siteRight.innerHTML = winningBox(playerName);
    // animation
    window.setTimeout(animateInBox, 300);
}

function animateInBox() {
  var rightBox = document.querySelector('.right-boxes');
  rightBox.style.top = '0px';
}

function clearFields () {
  playerOneName.innerText === undefined;
  playerTwoName.innerText === undefined;
  playerOneGuess.innerText === undefined;
  playerTwoGuess.innerText === undefined;
}

function resetValues () {
  nameReplaceOne.innerText = 'Challenger 1';
  nameReplaceTwo.innerText = 'Challenger 2';
  guessReplaceOne.innerText = '97';
  guessReplaceTwo.innerText = '3';
}


clearButton.addEventListener('click', clearFields);
// event listen to call functions

// track number of times button is pressed

// add event listener to reset button and call randomNumGenerate functions

// add event listener to clear button and make all values in box 2 undefined.
//make text in box 3 reset to default.
// add if statement that changes the color back to light if it is currently dark.


// Example of changing a style in JS:
// var button = document.getElementById('thisistheid').
//
// button.style.backgroundColor = blue;

//create a new function that changes color of reset button from light to dark. add this function to the updateClick function.
