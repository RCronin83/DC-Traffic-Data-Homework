let fileSystem = require('fs');



module.exports = function parse(file){
  let trafficFile = fileSystem.readFileSync(file);

  let returnData = [];
  let contentsOfFile = trafficFile;

  let stringValue = contentsOfFile.toString();
  let rows = stringValue.split('\n');
  rows.forEach(function printData(row) {
    let singleData = row.split(',');
    returnData.push(singleData);

  });
  return returnData;
};
