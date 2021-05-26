const express = require("express");
const path = require("path");

const app = express();
const indexHtmlPath = path.join(__dirname, "html/index.html");
const aboutHtmlPath = path.join(__dirname, "html/about.html");


app.get("/home", (request, response) => response.sendFile(indexHtmlPath));

app.get("/about", (request, response) => response.sendFile(aboutHtmlPath));


app.listen(4000, () => console.log("server is running"));

