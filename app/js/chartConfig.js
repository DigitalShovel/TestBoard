//////////////////// Array of List /////////////////////////////
////                     CH1                       ...      ////
////    [CT1, CT2, CT3, CT4, CT5, CT6, CT7, CT8], [...]     ////
////////////////////////////////////////////////////////////////

///////// Color & Font variables ////////
const arrowColor = 'rgba(255, 26, 104, 1)';
const labelTextColor = 'hsla(213, 75%, 54%, 1)';
const labelTextFont = 'sans-serif';
const scrollbarColor = 'lightgrey';
const movableScrollbarColor = 'hsla(213, 100%, 90%, 1)';
const movableScrollbarEdge = 'hsla(213, 100%, 97%, 1)';

//////// Chart Dimensions ///////
let chartWidth = 400;
let chartHeight = 400;



//////////// Function to scroll the chart //////////////
function moveScroll(movingChart) {
    const { ctx, canvas, chartArea: {left, right, top, bottom, width, height} } = movingChart;

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= left-30 && x < left+30 && y >= height/2 + top-30 && y < height/2 + top+30) {
            movingChart.options.scales.x.min = movingChart.options.scales.x.min - maxDataPerChart+1;
            movingChart.options.scales.x.max = movingChart.options.scales.x.max - maxDataPerChart+1;
            if (movingChart.options.scales.x.min <= 0) {
                movingChart.options.scales.x.min = 0;
                movingChart.options.scales.x.max = maxDataPerChart-1;
            }
        }

        if (x >= right-30 && x < right+30 && y >= height/2 + top-30 && y < height/2 + top+30) {
            movingChart.options.scales.x.min = movingChart.options.scales.x.min + maxDataPerChart-1;
            movingChart.options.scales.x.max = movingChart.options.scales.x.max + maxDataPerChart-1;
            if (movingChart.options.scales.x.max >= data.datasets[0].data.length) {
                movingChart.options.scales.x.min = data.datasets[0].data.length - maxDataPerChart+1;
                movingChart.options.scales.x.max = data.datasets[0].data.length;
            }
        }
        movingChart.update('active');
    });
}

///////////////// Build array of charts ///////////////////
let listOfCharts = [];
///////// Attach the chart variable to the Canvas //////////
function createCharts(){
    var chart1 = document.getElementById('T1G1C1').getContext('2d');
    listOfCharts.push([new Chart(chart1, config)]);

    listOfCharts[0][0].ctx.onclick = moveScroll(listOfCharts[0][0]);
    listOfCharts[0][0].canvas.addEventListener('wheel', (e) => {
    scrollWheel(e, listOfCharts[0][0]);
});
}
//////////////////////////////////////////////////////////

///////// Build array of dateLabels reference //////////
const lastLabel = {
    dateLabel: "00/00/00 00:00:00"
  }
let listOfDateLabel = [];
listOfDateLabel.push([Object.create(lastLabel)]);
/////////////////////////////////////

////////////// Function for the scroll wheel ////////////////
function scrollWheel(wheel, chart) {
    if (wheel.deltaY > 0) {
        chart.options.scales.x.min = chart.options.scales.x.min + maxDataPerChart-1;
        chart.options.scales.x.max = chart.options.scales.x.max + maxDataPerChart-1;
        if (chart.options.scales.x.max >= data.datasets[0].data.length) {
            chart.options.scales.x.min = data.datasets[0].data.length - maxDataPerChart+1;
            chart.options.scales.x.max = data.datasets[0].data.length;
        }
    }
    if (wheel.deltaY < 0) {
        chart.options.scales.x.min = chart.options.scales.x.min - maxDataPerChart+1;
        chart.options.scales.x.max = chart.options.scales.x.max - maxDataPerChart+1;
        if (chart.options.scales.x.min <= 0) {
            chart.options.scales.x.min = 0;
            chart.options.scales.x.max = maxDataPerChart-1;
        }
    }
    chart.update();
}

///////////////// Creating Class for the graphs /////////////////
class GraphsStation {
    testNUM = 0
    totalTEST = 0
    timeREF = "00/00/00 00:00:00"
    channelARRAY = [[0]]
    CTARRAY = [0]
    constructor(station) {
            this.station = station;
    }
    progressPercentage() {
        return Math.round((this.testNUM/this.totalTEST)*100);
    }
    createChart() {
        for (var k=1; k <= 6; k++) {
            this.CTARRAY = [0];
            for (var i=1; i <= 8; i++) {
                this.CTARRAY.push(new Chart(document.getElementById('T'+this.station+'G'+k+'C'+i).getContext('2d'), config))
                this.CTARRAY[i].ctx.onclick = moveScroll(this.CTARRAY[i]);
                this.CTARRAY[i].canvas.addEventListener('wheel', (e) => {
                    scrollWheel(e, this.CTARRAY[i]);
                    });
            }
            this.channelARRAY.push(this.CTARRAY)
        }
    }
}