
function updateProgressCircle(){
  var circle = document.querySelector('circle');
  var radius = 14; //circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;
}

function setProgress(testNumber, testTotal) {
  const offset = circumference - (testNumber/testTotal) * circumference;
  circle.style.strokeDashoffset = offset;
}