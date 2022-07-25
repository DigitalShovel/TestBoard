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
        plugins: {
            title: {
                display: true,
                text: 'Station 1 - Channel 1 - CT 1'
            }
        },
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
function fitChart(){
    var chartCanvas = document.getElementById('myChart');
    var maxWidth = chartCanvas.parentElement.parentElement.clientWidth;
    console.log(maxWidth);
    var width = Math.max(myChart.data.labels.length * xAxisLabelMinWidth, maxWidth);

    chartCanvas.parentElement.style.width = width +'px';
}
///////// Attach the chart variable to the Canvas //////////
const chart1 = document.getElementById('myChart').getContext('2d');
////////////////////////////////////////////////////////////

//////////////////// Array of List /////////////////////////////
////                     CH1                       CH2      ////
////    [CT1, CT2, CT3, CT4, CT5, CT6, CT7, CT8], [...]     ////
////////////////////////////////////////////////////////////////

///////////////// Build array of charts ///////////////////
let listOfCharts = [];
listOfCharts.push([new Chart(chart1, config)]);
//////////////////////////////////////////////////////////

///////// Build array of dateLabels reference //////////
const lastLabel = {
    dateLabel: "22/07/22 11:14:28"
  }
let listOfDateLabel = [];
listOfDateLabel.push([Object.create(lastLabel)]);
/////////////////////////////////////