var minSelect = document.querySelector('#minimum');
var maxSelect = document.querySelector('#maximum');
var updateButton = document.querySelector('#update-button');

updateButton.addEventListener('click', function () {
  var newMin = minSelect.value;
  return document.querySelector('#min-value').innerText = newMin;
});

updateButton.addEventListener('click', function () {
  var newMax = maxSelect.value;
  return document.querySelector('#max-value').innerText = newMax;
});
