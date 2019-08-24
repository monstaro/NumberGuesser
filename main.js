// global variables for changing current range

var minSelect = document.querySelector('#minimum');
var maxSelect = document.querySelector('#maximum');
var updateButton = document.querySelector('#update-button');
var newMin = minSelect.value;
var newMax = maxSelect.value;
var randomInteger = 0;

function randomNumGenerate () {
  newMin = minSelect.value;
  newMax = maxSelect.value;
  randomInteger = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

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

function replaceMax () {
  var newMax = maxSelect.value;
  if (newMax == null) {
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

updateButton.addEventListener('click', updateClick);



//global variables for changing challenger name/guess

// currently not working- commented out for now

// var submitButton = document.querySelector('#submit-button');
// var playerOneName = document.querySelector('#challenger-one-name');
// var playerTwoName = document.querySelector('#challenger-two-name');
// var playerOneGuess = document.querySelector('#ply-one-guess');
// var playerTwoGuess = document.querySelector('#ply-two-guess');
// //
// // //changes player names and guesses in bottom textbox
// //
// submitButton.addEventListener('click', function() {
//   var challengerOneName = playerOneName.value;
//   return document.querySelector('#chlg-one-name').innerText = challengerOneName;
// });
//
// submitButton.addEventListener('click', function() {
//   var challengerTwoName = playerTwoName.value;
//   return document.querySelector('#chlg-two-name').innerText = challengerTwoName;
// });
//
// submitButton.addEventListener('click', function() {
//   var chlgOneGuess = playerOneGuess.value;
//   return document.querySelector('#ply-one-pink').innerText = chlgOneGuess;
// });
//
// submitButton.addEventListener('click', function() {
//   var chlgTwoGuess = playerTwoGuess.value;
//   return document.querySelector('#ply-two-pink').innerText = chlgTwoGuess;
// });
