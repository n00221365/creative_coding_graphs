let barCharts = [];
let data1;
let data2;
let data3;
let data4;
let data5;

let cleanData = [];
let cleanData2 = [];
let cleanData3 = [];
let cleanData4 = [];
let cleanData5 = [];

let numRows;
let numRows2;
let numRows3;
let numRows4;
let numRows5;

function preload() {
  data1 = loadTable("data/property_price1.csv", "csv", "header");
  data2 = loadTable("data/test5.csv", "csv", "header");
  data3 = loadTable("data/property_price.csv", "csv", "header");
  data4 = loadTable("data/test2.csv", "csv", "header");
}

function setup() {
  background(50);
  createCanvas(2500, 2500);
  angleMode(DEGREES);
  noLoop();

  numRows = data1.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData.push(data1.rows[i].obj);
  }
  // cleanData = data.rows.map(d => d.obj)

  let barChart01 = {
    data: cleanData,
    title: "Price of Different Types of Property 2019",
    xAxisTitle: "Type and Area of Residential Property",
    yAxisTitle: "Price",
    xValue: "Type of Residential Property",
    yValue: "VALUE",
    chartWidth: 700,
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
  barCharts.push(new BarChart(barChart01));


  numRows2 = data2.rows.length;
  for (let i = 0; i < numRows2; i++) {
    cleanData2.push(data2.rows[i].obj);
  }

let barChart02 = {
  data: cleanData2,
  title: "Rental property size in Munster",
  xAxisTitle: "Size (Square Meters)",
  yAxisTitle: "County",
  xValue: "VALUE",
  yValue: "Local Authority",
  chartWidth: 700,
  chartHeight: 180,
  xPos: 1150,
  yPos: 450,
  axisLineColour: "#d9d9d9",
  barWidth: 20,
  labelTextSize: 130,
  labelPadding: 10,
  labelColour: "#db1f83",
  labelRotation: 0,
};
barCharts.push(new HorizontalBarChart(barChart02));



numRows = data3.rows.length;
for (let i = 0; i < numRows; i++) {
  cleanData3.push(data3.rows[i].obj);
}
//this.cleanData = this.data.rows.map(d => d.obj)

let barChart03 = {
  data: cleanData3,
  title: "Price of Different Types of Property 2019",
  xAxisTitle: "Type and Area of Residential Property",
  yAxisTitle: "Price",
  
  xValue: "Type of Residential Property",
  bottomYValue: "VALUE2018",
  topYValue: "VALUE2019",
 // bottomYValue: 40,
  //topYValue: 20,
  bottomValueTitle: "bingus",

  chartWidth: 700,
  chartHeight: 300,

  xPos: 150,
  yPos: 1150,

  axisLineColour: "#d9d9d9",
  barWidth: 20,
  labelTextSize: 20,
  labelPadding: 10,
  labelColour: "#db1f83",
  labelRotation: 45,
}

barCharts.push(new StackedBarChart(barChart03));



numRows4 = data4.rows.length;
for (let i = 0; i < numRows4; i++) {
  cleanData4.push(data4.rows[i].obj);
}

let barChart4 = {
  data: cleanData4,
  title: "Price of Different Types of Property 2019",
  xAxisTitle: "Type and Area of Residential Property",
  yAxisTitle: "Price",
  
  yValue: "Age Group",
  topXValue: "FEMALEVALUE",
  bottomXValue: "MALEVALUE",
  chartWidth: 700,
  chartHeight: 300,

  xPos: 1050,
  yPos: 1150,

  axisLineColour: "#d9d9d9",
  barWidth: 20,
  labelTextSize: 20,
  labelPadding: 10,
  labelColour: "#db1f83",
  labelRotation: 0,
};
barCharts.push(new AgeChart(barChart4));
}



function draw() {
  background(11, 19, 43);
  barCharts.forEach(bar => bar.render());
}