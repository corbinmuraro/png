const simpleParser = require("mailparser").simpleParser;
const cheerio = require("cheerio");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-west-2" });
const s3 = new AWS.S3();

const main = async (message) => {
  const { from, subject, attachments } = await simpleParser(message);
  $ = cheerio.load(html);
  let response = null;

  if (subject == "png" && from.indexOf("corbinmuraro") > -1) {
    console.log("found one");
  }
  else {
    console.log("nothing found");
  }
};

const res = await main();

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda and Github!'),
    };
    return response;
};
