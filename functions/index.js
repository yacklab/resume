const functions = require("firebase-functions");
const ReactDOMServer = require("react-dom/server");
const express = require("express");
const path = require("path");
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname, "..", "build/index.htm"));
});

app.get("/hello", (request, response) => {
  response.send("hello / hello");
});

exports.entrypoint = functions.https.onRequest(app);
