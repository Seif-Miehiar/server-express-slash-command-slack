const express = require("express");
const app = express();
var compression = require("compression");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

let arrayOfLinks = [];

const botUserOAuthAccessToken =
  "xoxb-958246117539-1025544532499-BmE8Kz7ALXFt9XnD5VVetDsK";

app.use(express.static(__dirname + "../dist/client"));

app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(compression());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../dist/client/src/index.html"));
});

// function sendMessageToSlackResponseURL(JSONmessage) {
//   var postOptions = {
//     uri:
//       "https://hooks.slack.com/commands/TU6783FFV/1041997001798/IliHvlMXCb7N7gxNmpiM7j9e",
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     json: {}
//   };
//   request(postOptions, (error, response, body) => {
//     if (error) {
//       // handle errors as you see fit
//     }
//   });
// }

app.post("/helloPost", (req, res) => {
  let linkObject = Object.assign(req.body);
  console.log("REQ body", linkObject.text);

  users[linkObject.user_name] = linkObject;
  res.send("Thank you for shareing your Zoom link with us, HaPPy HaCkinG :D");
});

app.get("/all", (req, res) => {
  const arr = [];
  for (const key in users) {
    arr.push(users[key]);
  }
  res.send(arr);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`listening to ${port}`);
});
