const express = require("express");
const path = require("path");


const app = express();

//middleware - veiksmai vykstantys ar po serverio uzklausu
//logger

const logger = (request, response, next) => {
   console.log("logger in action")
   console.log(`${request.protocol}::/${request.get("host")}${request.originalUrl} on : ${new Date().toLocaleTimeString()}`)
   next()
}

//naudoti logger funkcija kaip middleware

app.use(logger)

//routes
const routePath = path.join(__dirname,"../client", "html");
const indexHtmlPath = path.join(__dirname, "../client", "html", "index.html");
const aboutHtmlPath = path.join(__dirname, "../client", "html", "about.html");

//routes for pages
app.get("/", (request, response) => response.sendFile(indexHtmlPath));
app.get("/about", (request, response) => response.sendFile(aboutHtmlPath));

//api routes

app.use("/api/people", require("./routes/api/peopleApi"))


//kai turime papke kurios failus norime pasiekti, is narsykles pagal pavadinimus, nustatome
//static folderi

app.use(express.static(routePath));


app.listen(5000, () => console.log("server is running"));

