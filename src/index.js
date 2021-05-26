const express = require("express");
const path = require("path");

const app = express();
const indexHtmlPath = path.join(__dirname, "html/index.html");
console.log(indexHtmlPath)

app.get("/", (request, response) => {
   // response.send("<h1> Hello world from express</h1>")
   response.sendFile(indexHtmlPath);
});


app.listen(4000, () => console.log("server is running"));

