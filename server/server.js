const express = require("express");
const app = express();
var compression = require("compression");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

let arrayOfLinks = [];

const botUserOAuthAccessToken =
  "xoxb-958246117539-1025544532499-BmE8Kz7ALXFt9XnD5VVetDsK";

app.use(express.static(__dirname + "/../client/dist/client"));

app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(compression());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../dist/client/src/index.html"));
});

app.post("/helloPost", (req, res) => {
  console.log("REQ body", req.body);
  let user = req.body.user_name;
  let text = req.body.text;
  let command = req.body.command;
  let userId = req.body.user_id;

  let linkObject = {};

  linkObject["userName"] = user;
  linkObject["text"] = text;
  linkObject["command"] = command;
  linkObject["user_id"] = userId;

  for (let i = 0; i < arrayOfLinks; i++) {
    let obj = arrayOfLinks[i];
    if (obj.userName === user) {
      obj.text = text;
    }
  }
  arrayOfLinks.push(linkObject);

  console.log("ARRAY OF LINKS LINE 48", arrayOfLinks);

  res.send({ text: "you successfully sent a request" });
});

app.get("/all", (req, res) => {
  console.log("/all API --------", arrayOfLinks);
  res.send(arrayOfLinks);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`listening to ${port}`);
});
