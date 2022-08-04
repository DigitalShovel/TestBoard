const radius = 14;
let circumference = radius * 2 * Math.PI;

function updateProgressCircle(id){
  document.getElementById(id).style.strokeDasharray = `${circumference} ${circumference}`;
  document.getElementById(id).style.strokeDashoffset = `${circumference}`;
}

function setProgress(id, testNumber, testTotal) {
  const offset = circumference - (testNumber/testTotal) * circumference;
  document.getElementById(id).style.strokeDashoffset = offset;
}