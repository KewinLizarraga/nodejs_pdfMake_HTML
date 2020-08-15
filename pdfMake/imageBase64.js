/**
 * Image to Base64, image local
 */
const fs = require("fs");

function base64Encode(file) {
  const body = fs.readFileSync(file);
  return body.toString("base64");
}
let base64String = base64Encode("public/img/graph_chart_statistic.png");
base64String = `data:image/png;base64,${base64String}`;

/**
 * Image to Base64, image url [...]
 */
// const urlImage =
//   "https://cdn3.iconfinder.com/data/icons/business-charts-and-diagrams/136/analytics__graph__chart__statistic__diagram-512.png";

module.exports = base64String;
