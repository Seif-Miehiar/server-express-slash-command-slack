const express = require("express");
const app = express();
const Main = require("./main/main");
var compression = require("compression");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

let users = {};
const MAIN = new Main();
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

app.get("/all", (req, res) => res.status(202).send(MAIN.students));

app.post("/helloPost", (req, res) => {
  console.log(req.body);
  MAIN.addTable(req.body);
  return res
    .status(201)
    .send("Thank you for sharing your Zoom link with us, HaPPy HaCkinG :D");
});

app.delete("/delete/name/:name", (req, res) => {
  MAIN.removeTable(req.params.user_name);
  return res.status(202).send(MAIN.students);
});
app.delete("/delete/id/:id", (req, res) => {
  MAIN.removeTable(req.params.id);
  return res.status(202).send(MAIN.students);
});

app.delete("/delete/all", (req, res) => {
  MAIN.emptyStudents();
  res.status(202).send([]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`☠☠ listening to ${PORT} ☠☠`);
});
