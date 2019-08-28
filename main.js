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
clearButton.addEventListener('click', clearFieldsClick);

function randomNumGenerate () {
  newMin = parseInt(minSelect.value);
  newMax = parseInt(maxSelect.value);
  resetButton.style.backgroundColor = '#6E6E6E';
  randomInteger = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

function replaceMin () {
  var newMin = parseInt(minSelect.value);
  var minText = document.querySelector('#min-value');
  if (newMin >= parseInt(maxSelect.value)) {
    alert('Max Range must be larger than Min Range');
    return false;
  }
  else if (newMin === undefined) {
    minText.innerText = 1;
  }
  else {
    minText.innerText = newMin;
  }
}

function replaceMax () {
  var newMax = parseInt(maxSelect.value);
  var maxText = document.querySelector('#max-value');
  if (newMax === undefined) {
    maxText.innerText = 100;
  }
  else {
    maxText.innerText = newMax;
}}

function updateClick () {
  randomNumGenerate ();
  replaceMin ();
  replaceMax ();
}

function changeBottomText () {
  clearButton.style.backgroundColor = '#6E6E6E';
  changeBottomTextName();
  changeBottomTextGuess();
  changeBottomTextHint ();
}

function changeBottomTextName () {
  if (playerOneName.value === '') {
    nameReplaceOne.innerText = 'Challenger 1';
  }
  else {
    nameReplaceOne.innerText = playerOneName.value;
  }
  if (playerTwoName.value === '') {
     nameReplaceTwo.innerText = 'Challenger 2';
  }
  else {
      nameReplaceTwo.innerText = playerTwoName.value;
  }}

function changeBottomTextHint () {
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

function changeBottomTextGuess () {
  if (playerOneGuess.value === '') {
    guessReplaceOne.innerText = 97;
  }
  else {
    guessReplaceOne.innerText = parseInt(playerOneGuess.value);
  }
  if (playerTwoGuess.value === '') {
    guessReplaceTwo.innerText = 3;
  }
  else {
    guessReplaceTwo.innerText = parseInt(playerTwoGuess.value);
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
    var siteRight = document.querySelector('.site-right');
    siteRight.innerHTML = winningBox(playerName);
    window.setTimeout(animateInBox, 300);
}

function animateInBox() {
  var rightBox = document.querySelector('.right-boxes');
  rightBox.style.top = '0px';
}

function clearFieldsClick () {
  clearFields ();
  resetValues ();
}

function clearFields () {
  clearButton.style.backgroundColor = '#D1D2D4';
  playerOneName.value = null;
  playerTwoName.value = null;
  playerOneGuess.value = null;
  playerTwoGuess.value = null;
}

function resetValues () {
  nameReplaceOne.innerText = 'Challenger 1';
  nameReplaceTwo.innerText = 'Challenger 2';
  guessReplaceOne.innerText = '97';
  guessReplaceTwo.innerText = '3';
}
