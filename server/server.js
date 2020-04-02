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
  res.sendFile(path.join(__dirname, "client", "index.html"));
<<<<<<< HEAD
=======
  //   res.render("", { arrayOfLinks: arrayOfLinks });
  //   res.render("index.ejs", arrayOfLinks);
>>>>>>> 17a19a78d8eedee70fe5d62eebc23e589066fa8a
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
  let linkObject = {};

  linkObject["userName"] = req.body.user_name;
  linkObject["text"] = req.body.text;
  linkObject["command"] = req.body.command;
  linkObject["user_id"] = req.body.user_id;

  arrayOfLinks.push(linkObject);
<<<<<<< HEAD
  console.log("ARRAY OF LINKS LINE 48", arrayOfLinks);

=======

  //   sendMessageToSlackResponseURL();
  //   res.send("got a post request");
>>>>>>> 17a19a78d8eedee70fe5d62eebc23e589066fa8a
  res.send({ text: "you successfully sent a request" });
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening to ${port}`);
});
