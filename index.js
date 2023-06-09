const express = require("express");
const app = express();
app.get("/", function (request, response) {
  response.sendFile(__dirname + "home.html");
});
app.listen(3000, function () {
  console.log("app is listening on port 3000");
});
