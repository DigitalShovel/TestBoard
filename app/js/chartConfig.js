//////////////////// Array of List /////////////////////////////
////                     CH1                       ...      ////
////    [CT1, CT2, CT3, CT4, CT5, CT6, CT7, CT8], [...]     ////
////////////////////////////////////////////////////////////////

///////// Attach the chart variable to the Canvas //////////
const chart1 = document.getElementById('myChart').getContext('2d');
////////////////////////////////////////////////////////////

///////// Color & Font variables ////////
const arrowColor = 'rgba(255, 26, 104, 1)';
const labelTextColor = '#911';
const labelTextFont = 'sans-serif';
const scrollbarColor = 'lightgrey';
const movableScrollbarColor = 'black';

//////////// Setup ////////////////
const maxDataPerChart = 25; // Number of data plus one
const data = {
  labels: [],
  autoPadding: true,
  datasets: [{
    label: 'PI Measurements',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4
  }, {
    label: 'ESP Measurements',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 50, 192)',
    tension: 0.1
}]
};

///////////// Move chart button design ///////////////////
const moveChart = {
    id: 'moveChart',
    afterEvent(chart, args) {
        const { ctx, canvas, chartArea: {left, right, top, bottom, width, height} } = chart;
        canvas.addEventListener('mousemove', (event) => {
            const x = args.event.x;
            const y = args.event.y;

            if (x >= left-15 && x < left+15 && y >= height/2 + top-15 && y < height/2 + top+15) {
                canvas.style.cursor = 'pointer';
            } else if (x >= right-15 && x < right+15 && y >= height/2 + top-15 && y < height/2 + top+15) {
                canvas.style.cursor = 'pointer';
            } else {
                canvas.style.cursor = 'default';
            }
        })
    },
    afterDraw(chart, args, pluginOptions) {
        const { ctx, chartArea: {left, right, top, bottom, width, height} } = chart;
        
        class CircleChevron {
            draw(ctx, x1, pixel) {
                const angle = Math.PI / 180;
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'rgba(102, 102, 102, 0.5)';
                ctx.fillStyle = 'white';
                ctx.arc(x1, height/2 + top, 15, angle * 0, angle * 360, false),
                ctx.stroke();
                ctx.fill();
                ctx.closePath();

                // Chevron Arrow Left //
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.strokeStyle = arrowColor;
                ctx.moveTo(x1+pixel, height/2 + top-7.5);
                ctx.lineTo(x1-pixel, height/2 + top);
                ctx.lineTo(x1+pixel, height/2 + top+7.5);
                ctx.stroke();
                ctx.closePath();
            }
        }
    ///////// Draw arrow pointing left /////////////
    let drawCircleLeft = new CircleChevron();
    drawCircleLeft.draw(ctx, left, 5);
    ///////// Draw arrow pointing right ////////////
    let drawCircleRight = new CircleChevron();
    drawCircleRight.draw(ctx, right, -5);
    /////////// Draw a scroll bar /////////////
    const bpix = chart.options.layout.padding.bottom+25;
    ctx.beginPath();
    ctx.fillStyle = scrollbarColor;
    ctx.rect(left+15, bottom+bpix, width-30, 15);
    ctx.fill();
    ctx.closePath();
    /////////// Draw a arrow for scroll bar /////////////
    ctx.beginPath();
    ctx.fillStyle = arrowColor;
    ctx.rect(left, bottom+bpix, 15, 15);
    ctx.rect(right-15, bottom+bpix, 15, 15);
    ctx.fill();
    ctx.closePath();
    /////////// Draw the movable scroll bar //////////////
    let startingPoint = left+15 + (width/chart.data.datasets[0].data.length)*(chart.options.scales.x.min);
    const barWidth = ((width - 30) / data.datasets[0].data.length)*maxDataPerChart;
    const totalWidth = startingPoint + barWidth;
    if (totalWidth > width) {
        startingPoint = right-15-barWidth;
    }
    ctx.beginPath();
    ctx.fillStyle = movableScrollbarColor;
    ctx.rect(startingPoint, bottom+bpix, barWidth, 15);
    ctx.fill();
    ctx.closePath();
    }
}
/////////////////////////////////////////////////////////////////

///////////// Default config of charts ////////////////////
const config = {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                right: 18,
                bottom: 30
            }
        },
        scales: {
            x: {
                min: 0,
                max: maxDataPerChart-1,
                title: {
                    display: false,
                    text: 'Time',
                    color: labelTextColor,
                    position: 'bottom',
                    font: {
                        family: labelTextFont,
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
                    color: labelTextColor,
                    font: {
                        family: labelTextFont,
                        size: 16,
                        weight: 'bold',
                        lineHeight: 1.2,
                    }
                }
            }
        }
    },
    plugins: [moveChart]
};
/////////////////////////////////////////////////////////

//////////// Function to scroll the chart //////////////
function moveScroll(movingChart) {
    const { ctx, canvas, chartArea: {left, right, top, bottom, width, height} } = movingChart;
    const numberOfData = movingChart.options.scales.x.max;

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= left-30 && x < left+30 && y >= height/2 + top-30 && y < height/2 + top+30) {
            movingChart.options.scales.x.min = movingChart.options.scales.x.min - numberOfData;
            movingChart.options.scales.x.max = movingChart.options.scales.x.max - numberOfData;
            if (movingChart.options.scales.x.min <= 0) {
                movingChart.options.scales.x.min = 0;
                movingChart.options.scales.x.max = numberOfData;
            }
        }

        if (x >= right-30 && x < right+30 && y >= height/2 + top-30 && y < height/2 + top+30) {
            movingChart.options.scales.x.min = movingChart.options.scales.x.min + numberOfData;
            movingChart.options.scales.x.max = movingChart.options.scales.x.max + numberOfData;
            if (movingChart.options.scales.x.max >= data.datasets[0].data.length) {
                movingChart.options.scales.x.min = data.datasets[0].data.length - numberOfData;
                movingChart.options.scales.x.max = data.datasets[0].data.length;
            }
        }
        movingChart.update('active');
    });
}

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

////////////// Function for the scroll wheel ////////////////
function scrollWheel(wheel, movingChart) {
    const numberOfData = movingChart.options.scales.x.max;
    if (wheel.deltaY > 0) {
        movingChart.options.scales.x.min = movingChart.options.scales.x.min + numberOfData;
        movingChart.options.scales.x.max = movingChart.options.scales.x.max + numberOfData;
        if (movingChart.options.scales.x.max >= data.datasets[0].data.length) {
            movingChart.options.scales.x.min = data.datasets[0].data.length - numberOfData;
            movingChart.options.scales.x.max = data.datasets[0].data.length;
        }
    }
    if (wheel.deltaY < 0) {
        movingChart.options.scales.x.min = movingChart.options.scales.x.min - numberOfData;
        movingChart.options.scales.x.max = movingChart.options.scales.x.max - numberOfData;
        if (movingChart.options.scales.x.min <= 0) {
            movingChart.options.scales.x.min = 0;
            movingChart.options.scales.x.max = numberOfData;
        }
    }
    movingChart.update('active');
}

/////////// Create the click button to move chart ////////////
listOfCharts[0][0].ctx.onclick = moveScroll(listOfCharts[0][0]);
listOfCharts[0][0].canvas.addEventListener('wheel', (e) => {
    scrollWheel(e, listOfCharts[0][0]);
});
//////////////////////////////////////////////////////////////