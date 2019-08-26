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
  else if (newMin === undefined) {
    return document.querySelector('#min-value').innerText = '1';
  }
  else {
    return document.querySelector('#min-value').innerText = newMin;
  }
}

// fucntion to repalce max text
function replaceMax () {
  var newMax = maxSelect.value;
  if (newMax === undefined) {
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
function changeBottomText () {
  if (playerOneName.value === undefined) {
    nameReplaceOne.innerText = 'Challenger 1'
  }
  else {
    nameReplaceOne.innerText = playerOneName.value;
  }
  if (playerTwoName.value === undefined) {
    nameReplaceTwo.innerText = 'Challenger 2'
  }
  else {
      nameReplaceTwo.innerText = playerTwoName.value;
  }
  // split to different function?
  guessReplaceOne.innerText = playerOneGuess.value;
  guessReplaceTwo.innerText = playerTwoGuess.value;
  if (playerOneGuess.value < randomInteger) {
    lowHighOne.innerText = "That's too low"
  }
  if (playerOneGuess.value > randomInteger) {
    lowHighOne.innerText = "That's too high"
  }
  else {
    lowHighOne.innerText = 'BOOM!'
    // this is where we can call on the winning card to appear
  }
  if (playerTwoGuess.value < randomInteger) {
    lowHighTwo.innerText = "That's too low"
  }
  if (playerTwoGuess.value > randomInteger) {
    lowHighTwo.innerText = "That's too high"
  }
  else {
    lowHighTwo.innerText = 'BOOM!'
    // this is where we can call on the winning card to appear
  }
}

// create div/box as variable (add ids to elements that need to change)
function winner () {
  // append elements to site-rite.
  // replace text within elements.
}

// event listen to call functions
submitGuessButton.addEventListener('click', changeBottomText);
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
