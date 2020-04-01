const express = require("express");
const app = express();
var compression = require("compression");
var bodyParser = require("body-parser");

let arrayOfLinks = [];

const botUserOAuthAccessToken =
  "xoxb-958246117539-1025544532499-BmE8Kz7ALXFt9XnD5VVetDsK";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(compression());

app.get("/", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "../client/index.html");
});

app.post("/helloPost", (req, res) => {
  let linkObject = {};
  linkObject["userName"] = req.body.user_name;
  linkObject["text"] = req.body.text;
  linkObject["command"] = req.body.command;
  linkObject["user_id"] = req.body.user_id;
  arrayOfLinks.push(linkObject);
  console.log(linkObject, "\n", arrayOfLinks);
  //   console.log(req.body);
  res.send("got a post request");
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening to ${port}`);
});
