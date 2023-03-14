const salaries = chicago.data;

const generatePoints = function () {
  const points = [];

  salaries.forEach(function (item) {
    points.push({
      job: item[9],
      salary: Number(item[11]),
    });
  });
  points.sort(compare);
  return points;
};

function compare(a, b) {
  if (a.salary < b.salary) return -1;
  if (a.salary > b.salary) return 1;
  if (a.salary === b.salary) return 0;
}

window.onload = function run() {
  const points = generatePoints();
  const dataset = generateDataset(points);
  drawChart(dataset);
};
