//////////////////// Array of List /////////////////////////////
////                     CH1                       ...      ////
////    [CT1, CT2, CT3, CT4, CT5, CT6, CT7, CT8], [...]     ////
////////////////////////////////////////////////////////////////

///////// Color & Font variables ////////
const arrowColor = "rgba(255, 26, 104, 1)";
const labelTextColor = "hsla(213, 75%, 54%, 1)";
const labelTextFont = "sans-serif";
const scrollbarColor = "hsla(213, 100%, 95%, 1)";
const movableScrollbarColor = "hsla(213, 100%, 80%, 1)";
const movableScrollbarEdge = "hsla(213, 100%, 90%, 1)";

//////// Chart Dimensions ///////
let chartWidth = 400;
let chartHeight = 200;

//////////// Function to scroll the chart //////////////
function moveScroll(movingChart) {
  const {
    ctx,
    canvas,
    chartArea: { left, right, top, bottom, width, height },
  } = movingChart;

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= left - 30 && x < left + 30 && y >= height / 2 + top - 30 && y < height / 2 + top + 30) {
      movingChart.options.scales.x.min = movingChart.options.scales.x.min - maxDataPerChart + 1;
      movingChart.options.scales.x.max = movingChart.options.scales.x.max - maxDataPerChart + 1;
      if (movingChart.options.scales.x.min <= 0) {
        movingChart.options.scales.x.min = 0;
        movingChart.options.scales.x.max = maxDataPerChart - 1;
      }
    }

    if (x >= right - 30 && x < right + 30 && y >= height / 2 + top - 30 && y < height / 2 + top + 30) {
      movingChart.options.scales.x.min = movingChart.options.scales.x.min + maxDataPerChart - 1;
      movingChart.options.scales.x.max = movingChart.options.scales.x.max + maxDataPerChart - 1;
      if (movingChart.options.scales.x.max >= data.datasets[0].data.length) {
        movingChart.options.scales.x.min = data.datasets[0].data.length - maxDataPerChart + 1;
        movingChart.options.scales.x.max = data.datasets[0].data.length;
      }
    }
    movingChart.update("active");
  });
}

///////////// Move chart button design ///////////////////
var moveChart = {
  id: "moveChart",
  afterEvent(chart, args) {
    const {
      ctx,
      canvas,
      chartArea: { left, right, top, bottom, width, height },
    } = chart;
    canvas.addEventListener("mousemove", (event) => {
      const x = args.event.x;
      const y = args.event.y;

      if (x >= left - 15 && x < left + 15 && y >= height / 2 + top - 15 && y < height / 2 + top + 15) {
        canvas.style.cursor = "pointer";
      } else if (x >= right - 15 && x < right + 15 && y >= height / 2 + top - 15 && y < height / 2 + top + 15) {
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "default";
      }
    });
  },
  afterDraw(chart, args, pluginOptions) {
    const {
      ctx,
      chartArea: { left, right, top, bottom, width, height },
    } = chart;

    /*class CircleChevron {
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
    drawCircleRight.draw(ctx, right, -5);*/
    /////////// Draw a scroll bar /////////////
    const bpix = chart.options.layout.padding.bottom + 25;
    ctx.beginPath();
    ctx.fillStyle = scrollbarColor;
    ctx.rect(left + 15, bottom + bpix, width - 30, 15);
    ctx.fill();
    ctx.closePath();
    /////////// Draw a arrow for scroll bar /////////////
    ctx.beginPath();
    ctx.fillStyle = movableScrollbarEdge;
    ctx.rect(left, bottom + bpix, 15, 15);
    ctx.rect(right - 15, bottom + bpix, 15, 15);
    ctx.fill();
    ctx.closePath();
    /////////// Draw the movable scroll bar //////////////
    let startingPoint = left + 15 + (width / chart.data.datasets[0].data.length) * chart.options.scales.x.min;
    var barWidth = ((width - 30) / chart.data.datasets[0].data.length) * maxDataPerChart;
    if (chart.data.datasets[0].data.length < 72) {
      barWidth = width - 30;
    }
    const totalWidth = startingPoint + barWidth;
    if (totalWidth > width) {
      startingPoint = right - 15 - barWidth;
    }
    ctx.beginPath();
    ctx.fillStyle = movableScrollbarColor;
    ctx.rect(startingPoint, bottom + bpix, barWidth, 15);
    ctx.fill();
    ctx.closePath();
  },
};
/////////////////////////////////////////////////////////////////

////////////// Function for the scroll wheel ////////////////
function scrollWheel(wheelEvent) {
  var chart = Chart.getChart(wheelEvent.target.id);
  if (wheelEvent.deltaY > 0) {
    chart.options.scales.x.min = chart.options.scales.x.min + maxDataPerChart - 1;
    chart.options.scales.x.max = chart.options.scales.x.max + maxDataPerChart - 1;
    if (chart.options.scales.x.max >= chart.data.datasets[0].data.length) {
      chart.options.scales.x.min = chart.data.datasets[0].data.length - maxDataPerChart + 1;
      chart.options.scales.x.max = chart.data.datasets[0].data.length;
    }
  }
  if (wheelEvent.deltaY < 0) {
    chart.options.scales.x.min = chart.options.scales.x.min - maxDataPerChart + 1;
    chart.options.scales.x.max = chart.options.scales.x.max - maxDataPerChart + 1;
    if (chart.options.scales.x.min <= 0) {
      chart.options.scales.x.min = 0;
      chart.options.scales.x.max = maxDataPerChart - 1;
    }
  }
  chart.update();
}

///////////////// Creating Class for the graphs /////////////////
class stationCharts {
  timeREF = "00/00/00 00:00:00";
  testNUM = 0;
  totalTEST = 0;
  chart = 0;
  success = true;

  constructor(station, channel, ct) {
    this.station = station;
    this.channel = channel;
    this.ct = ct;
  }

  //////////// Setup ////////////////
  data = {
    labels: [],
    autoPadding: true,
    datasets: [
      {
        label: "Pi",
        data: [],
        fill: false,
        borderColor: "hsla(360, 50%, 45%, 1)",
        tension: 0.4,
      },
      {
        label: "ESP",
        data: [],
        fill: false,
        borderColor: "hsla(213, 75%, 54%, 1)",
        tension: 0.1,
      },
    ],
  };

  ///////////// Default config of charts ////////////////////
  config = {
    type: "line",
    data: this.data,
    options: {
      // plugins: {
      //   title: {
      //     display: true,
      //     text: "CT - Graph"
      //   }
      // },
      layout: {
        padding: {
          right: 16,
          bottom: 16,
          top: 1,
          left: 16,
        },
      },
      scales: {
        x: {
          min: 0,
          max: maxDataPerChart - 1,
          title: {
            display: false,
            text: "Time",
            color: labelTextColor,
            position: "bottom",
            font: {
              family: labelTextFont,
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Voltage",
            color: labelTextColor,
            font: {
              family: labelTextFont,
              size: 12,
              weight: "bold",
              lineHeight: 1.2,
            },
          },
        },
      },
    },
    plugins: [moveChart],
  };

  createChart() {
    var chartGraph = new Chart(document.getElementById("T" + this.station + "G" + this.channel + "C" + this.ct).getContext("2d"), this.config);
    chartGraph.canvas.addEventListener("wheel", (e) => {
      scrollWheel(e);
    });
    //chartGraph.ctx.onclick = moveScroll(chartGraph);
    this.chart = chartGraph;
  }

  progressPercentage() {
    return Math.round((this.testNUM / this.totalTEST) * 100);
  }
}
