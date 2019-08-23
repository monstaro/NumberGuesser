// global variables for changing current range
var minSelect = document.querySelector('#minimum');
var maxSelect = document.querySelector('#maximum');
var updateButton = document.querySelector('#update-button');

//Changes current range text
updateButton.addEventListener('click', function () {
  var newMin = minSelect.value;
  return document.querySelector('#min-value').innerText = newMin;
});

updateButton.addEventListener('click', function () {
  var newMax = maxSelect.value;
  return document.querySelector('#max-value').innerText = newMax;
});

//global variables for changing challenger name/guess
var submitButton = document.querySelector('#submit-button');
var playerOneName = document.querySelector('#challenger-one-name');
var playerTwoName = document.querySelector('#challenger-two-name');
var playerOneGuess = document.querySelector('#ply-one-guess');
var playerTwoGuess = document.querySelector('#ply-two-guess');

//changes player names and guesses in bottom textbox
submitButton.addEventListener('click', function() {
  var challengerOneName = playerOneName.value;
  return document.querySelector('#chlg-one-name').innerText = challengerOneName;
});

submitButton.addEventListener('click', function() {
  var challengerTwoName = playerTwoName.value;
  return document.querySelector('#chlg-two-name').innerText = challengerTwoName;
});

submitButton.addEventListener('click', function() {
  var chlgOneGuess = playerOneGuess.value;
  return document.querySelector('#ply-one-pink').innerText = chlgOneGuess;
});

submitButton.addEventListener('click', function() {
  var chlgTwoGuess = playerTwoGuess.value;
  return document.querySelector('#ply-two-pink').innerText = chlgTwoGuess;
});
