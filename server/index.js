const express = require("express");
const path = require("path");
const {people} = require("./js/people");

const app = express();

//routes
const routePath = path.join(__dirname, "html");
const indexHtmlPath = path.join(__dirname, "../client", "html", "index.html");
const aboutHtmlPath = path.join(__dirname, "../client", "html", "about.html");


app.get("/", (request, response) => response.sendFile(indexHtmlPath));
app.get("/about", (request, response) => response.sendFile(aboutHtmlPath));

//our all api
app.get("/api/people", (req, res) => {
   res.json(people);
})

//get one people api
app.get("/api/people/:id", (req, res) => {
   const paramId = req.params.id

   const found = people.find((element) => element.id === paramId)

   if (!found) {
      res.status(404).json({"errorMsg": "neteisingai nurodytas id"});
   } else {
      res.json(found);
   }
})


//kai turime papke kurios failus norime pasiekti, is narsykles pagal pavadinimus, nustatome
//static folderi

app.use(express.static(routePath));


app.listen(5000, () => console.log("server is running"));

