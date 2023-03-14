var dataset = [["x", "y"]];

function generateDataset(points) {
  var datapoint = [];
  var index = 1;
  var length = points.length;
  for (var i = 0; i < length; i++) {
    var p = points[i];
    var point = [p.x, p.y];
    var point = [i, p.salary];
    dataset[index] = point;
    index++;
  }
  return dataset;
}

google.load("visualization", "1", { packages: ["corechart"] });

function drawChart(dataset) {
  var data = google.visualization.arrayToDataTable(dataset);

  var options = {
    title: "City of Chicago Salaries",
    pointSize: 1,
    curveType: "function",
    vAxis: { gridlines: { count: 20 }, textStyle: { color: "white" } },
    hAxis: { textStyle: { color: "white" } },
    backgroundColor: "black",
    titleTextStyle: { color: "white" },
    textStyle: { color: "white" },
    colors: ["pink"],
  };

  var target = document.getElementById("chart_div");
  var chart = new google.visualization.ScatterChart(target);
  chart.draw(data, options);
}
