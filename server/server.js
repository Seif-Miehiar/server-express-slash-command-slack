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

app.post("/ozil", (req, res) => {
  let linkObject = Object.assign(req.body);
  console.log("REQ body", linkObject.text);

  users[linkObject.user_name] = linkObject;
  // for (let i = 0; i < arrayOfLinks; i++) {
  //   console.log(obj);
  //   if (arrayOfLinks.length === 0) {
  //     arrayOfLinks.push(linkObject);
  //   }

  //   let obj = arrayOfLinks[i];
  //   if (obj.userName === user) {
  //     obj.text = text;
  //     break;
  //   }
  // }
  // arrayOfLinks.push(linkObject);

  // console.log("ARRAY OF LINKS LINE 48", arrayOfLinks);

  res.send(users);
});

app.get("/all", (req, res) => {
  console.log("/all API --------", arrayOfLinks);
  res.send(arrayOfLinks);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`listening to ${port}`);
});
