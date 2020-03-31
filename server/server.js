const express = require("express");
const app = express();
var compression = require("compression");

const botUserOAuthAccessToken =
  "xoxb-958246117539-1025544532499-BmE8Kz7ALXFt9XnD5VVetDsK";

app.use(express.static("public"));

app.use(compression());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/helloPost", (req, res) => res.send("got a post request"));

const port = process.env.port || 5000;

app.listen(port, function() {
  console.log(`listening to ${port}`);
});
