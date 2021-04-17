import { getFirstmeaningfulPaintResults } from '../lib/utils';
import * as fs from 'fs';
import * as path from 'path';
var report = './results';

export const generateHtmlReport = async () => {
  var rows = "";
  var results;
  var currentDate = new Date().toJSON().slice(0, 10);
  var filePath = path.join(report, "output_".concat(currentDate));

  if (!fs.existsSync(report)) fs.mkdirSync(report);
  results = await getFirstmeaningfulPaintResults();
  rows += "<tr>";

  results.forEach(result => {
    rows += "<td>" + result.PageName + "</td>";
  });
  rows += "</tr>";
  rows += "<tr>";
  results.forEach(result => {
    rows += "<td>" + result.FirstMeaningfulPaintValue.toString().concat("s") + "</td>";
  });
  rows += "</tr>";

  var headersHtml = "<h1>First Meaningful Paint Metrics - ".concat(currentDate).concat("</h1>");
  var html = "<table border= 1px solid black;class=\"table table-striped table-bordered table-hover\">" + headersHtml + rows + "</table>";
  fs.writeFile(filePath.concat(".html"), html, (error) => { console.log(error) });


}