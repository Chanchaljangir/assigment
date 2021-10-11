require("dotenv").config();
let express = require("express");
let bodyParser = require("body-parser");
let http = require("http");
let cors = require("cors");
let nLog = require("noogger");

// Init App
var app = express();
var server = http.createServer(app);

//logger configurations
var nlogParams = {
    consoleOutput: true,
    consoleOutputLevel: "DEBUG",
    dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
    fileNameDateFormat: "YYYY-MM-DD",
    fileNamePrefix: "cl-",
    outputPath: "logs/"
};
nLog.init(nlogParams);

//Use CORS
app.use(cors());

// Use body-parser to get POST requests for API use
app.use(
    bodyParser.json({
        limit: "50mb"
    })
);

// Routes setup
let publicRoutes = require("./routes/index");
let apiRoutes = require("./routes/api");

app.use("/api", apiRoutes);
app.use("/", (req, res) => {
    res.json({
        IsSuccess: true,
        Message: "route not found"
    });
});

app.set("port", process.env.PORT || 90);

server.listen(app.get("port"), function () {
    console.log("Server started on port " + app.get("port"));
});
