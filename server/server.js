const express = require("express");
const app = express();
var compression = require("compression");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

let users = {};

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

app.delete("/deleteAll", (req, res) => {
  users = {};
  res.status(202).send(Object.keys(users).map((user_name) => users[user_name]));
});

app.post("/helloPost", (req, res) => {
  let arr = req.body.text.split(",") || req.body.text.split(" ");
  users[req.body.user_name] = {
    ...req.body,
    text: arr,
    pair: arr[0],
    zoomLink: arr[1],
  };
  return res
    .status(201)
    .send("Thank you for sharing your Zoom link with us, HaPPy HaCkinG :D");
});

app.get("/all", (req, res) =>
  res.status(202).send(Object.keys(users).map((user_name) => users[user_name]))
);

app.delete("/delete/id/:id", (req, res) => {
  console.log("hello");
  let length = Object.keys(users).length;

  users = Object.keys(users).reduce((acc, user) => {
    if (users[user].user_id !== req.params.id) acc[user] = users[user];
    return acc;
  }, {});

  return length === Object.keys(users).length // this is over complicated, long, O(n) and most importantly ugly so so don't mind it
    ? res.status(400).send("not ok") // i need some time to find the best way to structure the code
    : res.status(200).send("ok");
});

app.delete("/delete/name/:name", (req, res) => {
  delete users[req.params.name];
  return res.status(202).send(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`☠☠ listening to ${PORT} ☠☠`);
});
