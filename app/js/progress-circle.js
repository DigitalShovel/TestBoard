const radius = 14; //circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;
//let circle = document.querySelector('circle');

function updateProgressCircle(){
  let circle = document.getElementById('PC1')
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;
}

function setProgress(testNumber, testTotal) {
  const offset = circumference - (testNumber/testTotal) * circumference;
  circle.style.strokeDashoffset = offset;
}