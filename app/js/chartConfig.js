//////////////////// Array of List /////////////////////////////
////                     CH1                       ...      ////
////    [CT1, CT2, CT3, CT4, CT5, CT6, CT7, CT8], [...]     ////
////////////////////////////////////////////////////////////////

///////// Attach the chart variable to the Canvas //////////
const chart1 = document.getElementById('myChart').getContext('2d');
////////////////////////////////////////////////////////////

//////////// Setup ////////////////
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
                ctx.strokeStyle = 'rgba(255, 26, 104, 1)';
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
    const bpix = chart.options.layout.padding.bottom;
    ctx.beginPath();
    ctx.fillStyle = 'lightgrey';
    ctx.rect(left, bottom+bpix, width, 15);
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
                max: 30,
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
    },
    plugins: [moveChart]
};
/////////////////////////////////////////////////////////

//////////// Function to scroll the chart //////////////
function moveScroll(movingChart) {
    const { ctx, canvas, chartArea: {left, right, top, bottom, width, height} } = movingChart;
    const numberOfData = movingChart.options.scales.x.max + 1;

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= left-30 && x < left+30 && y >= height/2 + top-30 && y < height/2 + top+30) {
            movingChart.options.scales.x.min = movingChart.options.scales.x.min - numberOfData;
            movingChart.options.scales.x.max = movingChart.options.scales.x.max - numberOfData;
            if (movingChart.options.scales.x.min <= 0) {
                movingChart.options.scales.x.min = 0;
                movingChart.options.scales.x.max = numberOfData-1;
            }
        }

        if (x >= right-30 && x < right+30 && y >= height/2 + top-30 && y < height/2 + top+30) {
            movingChart.options.scales.x.min = movingChart.options.scales.x.min + numberOfData;
            movingChart.options.scales.x.max = movingChart.options.scales.x.max + numberOfData;
            if (movingChart.options.scales.x.max >= data.datasets[0].data.length) {
                movingChart.options.scales.x.min = data.datasets[0].data.length-numberOfData;
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

/////////// Create the click button to move chart ////////////
listOfCharts[0][0].ctx.onclick = moveScroll(listOfCharts[0][0]);
//////////////////////////////////////////////////////////////