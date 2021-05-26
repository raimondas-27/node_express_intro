const express = require("express");
const path = require("path");
const {people } = require("./js/people");

const app = express();

//routes
const routePath = path.join(__dirname, "html");
const indexHtmlPath = path.join(__dirname, "html/index.html");
const aboutHtmlPath = path.join(__dirname, "html/about.html");


app.get("/home", (request, response) => response.sendFile(indexHtmlPath));
// app.get("/about", (request, response) => response.sendFile(aboutHtmlPath));

//our api

app.get("/api/people", (req, res) => {
   res.json(people);
})




//kai turime papke kurios failus norime pasiekti, is narsykles pagal pavadinimus, nustatome
//static folderi

app.use(express.static(routePath));


app.listen(4000, () => console.log("server is running"));

