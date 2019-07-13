/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
const express = require("express");
const logger = require("morgan");
const path = require("path");

const { config } = require("./config");
const { router } = require("./router");

//let requestDebug = require("request-debug");
//let requestJs = require("request");

//if (config.get("env") !== "production") {
// 	requestDebug(requestJs);
//}

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

if (config.get("env") !== "production") {
	app.use(logger("dev"));
}

app.use(express.static(path.join(__dirname, "public")));

router();

app.listen(config.get("port"), function() {
	console.log("Listening on port " + this.address().port);
});
