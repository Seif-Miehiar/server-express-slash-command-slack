const express = require("express");
const app = express();
var compression = require("compression");
var bodyParser = require("body-parser");
var path = require("path");

let arrayOfLinks = [];

const botUserOAuthAccessToken =
  "xoxb-958246117539-1025544532499-BmE8Kz7ALXFt9XnD5VVetDsK";

app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(compression());

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname + "index.html"));
  res.sendFile(path.join(__dirname, "client", "index.html"));
  //   res.render("", { arrayOfLinks: arrayOfLinks });
  //   res.render("index.ejs", arrayOfLinks);
});

function sendMessageToSlackResponseURL(JSONmessage) {
  var postOptions = {
    uri:
      "https://hooks.slack.com/commands/TU6783FFV/1041997001798/IliHvlMXCb7N7gxNmpiM7j9e",
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    json: {}
  };
  request(postOptions, (error, response, body) => {
    if (error) {
      // handle errors as you see fit
    }
  });
}
// app.post(
//   "https://hooks.slack.com/commands/TU6783FFV/1041997001798/IliHvlMXCb7N7gxNmpiM7j9e",
//   { "Content-type": "application/json" },
//   (req, res) => {
//     res.send({ text: "you successfully sent a request" });
//   }
// );
app.post("/helloPost", (req, res) => {
  let linkObject = {};

  linkObject["userName"] = req.body.user_name;
  linkObject["text"] = req.body.text;
  linkObject["command"] = req.body.command;
  linkObject["user_id"] = req.body.user_id;

  arrayOfLinks.push(linkObject);

  //   sendMessageToSlackResponseURL();
  //   res.send("got a post request");
  res.send({ text: "you successfully sent a request" });
  //   app.get("/", (req, res) => {
  //     res.send(arrayOfLinks);
  //   });
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening to ${port}`);
});
