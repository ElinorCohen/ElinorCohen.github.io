const express = require("express");
const router = express.Router();

const { send } = require("./service");

router.post("/send", send);

module.exports = router;
