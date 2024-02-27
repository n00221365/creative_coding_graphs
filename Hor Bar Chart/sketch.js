let barCharts = [];
let data;
let cleanData = [];
let numRows;

function preload() {
  data = loadTable("data/test5.csv", "csv", "header");
}

function setup() {
  background(50);
  createCanvas(700, 800);
  angleMode(DEGREES);
  noLoop();

  numRows = data.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData.push(data.rows[i].obj);
  }
  // cleanData = data.rows.map(d => d.obj)

  let horizontalbarChart01 = {
    data: cleanData,
    title: "Rental property size in Munster",
    xAxisTitle: "Local Authority",
    yAxisTitle: "Size (Square Meters)",
    xValue: "Local Authority",
    yValue: "VALUE",
    chartWidth: 400,
    chartHeight: 300,
    xPos: 150,
    yPos: 450,
    axisLineColour: "#d9d9d9",
    barWidth: 20,
    labelTextSize: 20,
    labelPadding: 10,
    labelColour: "#db1f83",
    labelRotation: 45,
  };
  barCharts.push(new HorizontalBarChart(horizontalbarChart01));
}

function draw() {
  background(50);
  barCharts.forEach((bar) => bar.render());


}
