//////////// Setup ////////////////
const data = {
  labels: timestamps,
  autoPadding: true,
  datasets: [{
    yAxisID: 'Voltage',
    label: 'CT Measurements',
    data: [65, 35],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            xAxes: {
                type: 'time',
                time: {
                    parser: 'HH:mm:ss'
                }
            }
        }
    }
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);
/////////////////////////////////////
