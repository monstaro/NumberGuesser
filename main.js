// global variables for changing current range
var minSelect = document.querySelector('#minimum');
var maxSelect = document.querySelector('#maximum');
var updateButton = document.querySelector('#update-button');
var newMin = minSelect.value;
var newMax = maxSelect.value;
var randomInteger = 0;

// function for generating the random #
function randomNumGenerate () {
  newMin = minSelect.value;
  newMax = maxSelect.value;
  randomInteger = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

// function to replace min text
function replaceMin () {
  var newMin = minSelect.value;
  if (newMin >= maxSelect.value) {
    alert('Max Range must be larger than Min Range');
    return false;
  }
  else if (newMin == null) {
    return document.querySelector('#min-value').innerText = '1';
  }
  else {
    return document.querySelector('#min-value').innerText = newMin;
  }
}

// fucntion to repalce max text
function replaceMax () {
  var newMax = maxSelect.value;
  if (newMax == null) {
    return document.querySelector('#min-value').innerText = 100;
  }
    else {
      return document.querySelector('#max-value').innerText = newMax;
}}

// all function above included in this function
function updateClick () {
  randomNumGenerate ();
  replaceMin ();
  replaceMax ();
}

// event listener to run all functions above
updateButton.addEventListener('click', updateClick);

// class for players/guesses
class Player {
  constructor (name, guess) {
    if (name == undefined) {
      this.name = 'Challenger';
    }
    else {
      this.name = name;
    }
    this.guess = guess;
  }
}

// global variables for bottom section. Move to top eventually.
var playerOneName = document.getElementById('challenger-one-name');
var playerTwoName = document.getElementById('challenger-two-name');
var playerOneGuess = document.getElementById('ply-one-guess');
var playerTwoGuess = document.getElementById('ply-two-guess');

// global variables for text replacement in bottom box. Move to top eventually
var nameReplaceOne = document.getElementById('chlg-one-name');
var nameReplaceTwo = document.getElementById('chlg-two-name');
var guessReplaceOne = document.getElementById('ply-one-pink');
var guessReplaceTwo = document.getElementById('ply-two-pink');
var lowHighOne = document.getElementById('low-or-high-one');
var lowHighTwo = document.getElementById('low-or-high-two');
var submitGuessButton = document.getElementById('submit-button');

// function for text replacement/determining winner. We might want to break this out into two functions (one for each player)
function changeBottonText () {
  nameReplaceOne.innerText = playerOneName.value;
  nameReplaceTwo.innerText = playerTwoName.value;
  guessReplaceOne.innerText = playerOneGuess.value;
  guessReplaceTwo.innerText = playerTwoGuess.value;
  if (playerOneGuess.value < randomInteger) {
    lowHighOne.innerText = "That's too low"
  }
  if (playerOneGuess.value > randomInteger) {
    lowHighOne.innerText = "That's too high"
  }
  else {
    // this is where we can call on the winning card to appear
  }
  if (playerTwoGuess.value < randomInteger) {
    lowHighTwo.innerText = "That's too low"
  }
  if (playerTwoGuess.value > randomInteger) {
    lowHighTwo.innerText = "That's too high"
  }
  else {
    // this is where we can call on the winning card to appear
  }
}

// event listen to call functions
submitGuessButton.addEventListener('click', changeBottonText);
