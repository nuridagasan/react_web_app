var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "eu-west-2"
});

console.log("Writing entries to Accessibilities table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var accessibilitiesData =
  JSON.parse(fs.readFileSync('../data/accessibilities.json', 'utf8'));

accessibilitiesData.forEach(accessibility => {
  var params = {
    TableName: "Accessibilities",
    Item: {
      "name": accessibility.name
    }
  };

  dynamodb.put(params, (err) => {
    if (err)
      console.error("Unable to load data into table for accessibility",
        accessibility.name, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", accessibility.name, "to table.")
  })
});