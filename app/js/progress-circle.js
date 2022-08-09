const radius = 14;
let circumference = radius * 2 * Math.PI;

function updateProgressCircle(id){
  document.getElementById(id).style.strokeDasharray = `${circumference} ${circumference}`;
  document.getElementById(id).style.strokeDashoffset = `${circumference}`;
}

function setProgress(id, textid, testNumber, testTotal) {
  var percentage = Math.round((testNumber/testTotal)*100);
  const offset = circumference - (testNumber/testTotal) * circumference;
  document.getElementById(id).style.strokeDashoffset = offset;
  document.getElementById(textid).innerHTML = String(percentage)+"%";
}