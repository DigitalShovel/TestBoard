//////////// Setup ////////////////
const data = {
  labels: ['January', 'Febuary', 'March', 'May', 'June'],
  datasets: [{
    label: 'CT Measurements',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);
/////////////////////////////////////
