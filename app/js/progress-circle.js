var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(testNumber, testTotal) {
  const offset = circumference - (testNumber/testTotal) * circumference;
  circle.style.strokeDashoffset = offset;
}

/*const input = document.querySelector('.progression-input');
setProgress(input.value);

input.addEventListener('change', function(e) {
  if (input.value < 101 && input.value > -1) {
    setProgress(input.value);
  }  
})*/