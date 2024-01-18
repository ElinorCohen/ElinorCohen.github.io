const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// Require the router module
const router = require("./routes");

// Use the router
app.use(cors({ "*": true, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8000, () => console.log("Example app is listening on port 8000."));
