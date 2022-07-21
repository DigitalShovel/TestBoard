//////////// Setup ////////////////
const data = {
  labels: [],
  autoPadding: true,
  datasets: [{
    label: 'PI Measurements',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }, {
    label: 'ESP Measurements',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 50, 192)',
    tension: 0.1
}]
};

const config = {
    type: 'line',
    data: data,
};

const ctx = document.getElementById('myChart').getContext('2d');

/// Creating different chart objects ///
const myChart = new Chart(ctx, config);
/////////////////////////////////////
