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

const moveChart = {
    id: 'moveChart',
    afterDraw(chart, args, pluginOptions) {
        const { ctx, chartArea: {left, right, top, bottom, width, height} } = chart;
        
        class CircleChevron {
            //constructor(x1,y1) {}
            draw(ctx, x1, y1, pixel) {
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
                ctx.moveTo(x1+5, height/2 + top-7.5);
                ctx.lineTo(x1-5, height/2 + top);
                ctx.lineTo(x1+5, height/2 + top+7.5);
                ctx.stroke();
                ctx.closePath();
            }
        }
    let drawCircleLeft = new CircleChevron();
    drawCircleLeft.draw(ctx, left, 1, 10);
    let drawCircleRight = new CircleChevron();
    drawCircleRight.draw(ctx, right, 1, 10);
    }
}

const config = {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                right: 18
            }
        },
        responsive: true,
        maintainAspectRatio: true,
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