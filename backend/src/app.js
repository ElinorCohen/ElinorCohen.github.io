const express = require("express");
require("dotenv").config();

const app = express();

// Require the router module
const router = require("./routes");

// Use the router
app.use("/", router);

app.listen(8000, () => console.log("Example app is listening on port 8000."));
