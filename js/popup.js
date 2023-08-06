var totalHours = 0;
var totalMinutes = 0;

function reloadPage() {
  location.reload();
}

function updateTotalResult(totalResult) {
  document.getElementById('total-result').textContent = totalResult;
}

var clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', reloadPage);

document.getElementById('calculate-btn').addEventListener('click', function() {
  var time1 = document.getElementById('time1').value;
  var time2 = document.getElementById('time2').value;

  if (time1 === null || time2 === null) {
    updateDifferenceResult("Пожалуйста, заполните все данные");
    return;
  }

  var hours1 = parseInt(time1.split(':')[0]);
  var minutes1 = parseInt(time1.split(':')[1]);
  
  var hours2 = parseInt(time2.split(':')[0]);
  var minutes2 = parseInt(time2.split(':')[1]);

  if (isNaN(hours1) || isNaN(minutes1) || isNaN(hours2) || isNaN(minutes2)) {
    updateDifferenceResult("Пожалуйста, заполните все данные");
    return;
  }

  var totalMinutes1 = hours1 * 60 + minutes1;
  var totalMinutes2 = hours2 * 60 + minutes2;

  var differenceMinutes = Math.abs(totalMinutes1 - totalMinutes2);
  var hoursDiff = Math.floor(differenceMinutes / 60);
  var minutesDiff = differenceMinutes % 60;
  var result = hoursDiff + ':' + (minutesDiff < 10 ? '0' : '') + minutesDiff;
  
  updateDifferenceResult(result);
});

function updateDifferenceResult(result) {
  document.getElementById('result').textContent = result;
}

document.getElementById('update-btn').addEventListener('click', function() {
  var hours = parseInt(document.getElementById('hours').value);
  var minutes = parseInt(document.getElementById('minutes').value);

  totalHours += hours;
  totalMinutes += minutes;

  // Обработка случая, когда количество минут превышает 60
  if (totalMinutes >= 60) {
    var additionalHours = Math.floor(totalMinutes / 60);
    totalHours += additionalHours;
    totalMinutes -= additionalHours * 60;
  }

  var totalResult = totalHours + ':' + (totalMinutes < 10 ? '0' : '') + totalMinutes;

  updateTotalResult(totalResult);
});

function reloadPage() {
  location.reload();
}

function updateTotalResult(totalResult) {
  document.getElementById('total-result').textContent = totalResult;
}

var clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', reloadPage);
