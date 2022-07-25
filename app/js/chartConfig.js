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
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                    color: '#911',
                    font: {
                        family: 'sans-serif',
                        size: 16,
                        weight: 'bold',
                        lineHeight: 1.2,
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Voltage',
                    color: '#911',
                    font: {
                        family: 'sans-serif',
                        size: 16,
                        weight: 'bold',
                        lineHeight: 1.2,
                    }
                }
            }
        }
    }
};

var xAxisLabelMinWidth = 10;
const chart1 = document.getElementById('myChart').getContext('2d');
let listOfCharts = [];
listOfCharts.push([new Chart(chart1, config)]);

/// Creating different chart objects & dateLabel ///
const lastLabel = {
    dateLabel: "22/07/22 11:14:28"
  }

const myChart = new Chart(chart1, config);
let listOfDateLabel = [];
listOfDateLabel.push([Object.create(lastLabel)]);
/////////////////////////////////////
//const chartCH1C1 = Object.create(lastLabel);