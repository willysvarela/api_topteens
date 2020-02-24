const express = require("express");
const router = express.Router();

router.use("/members", require("./members"));
router.use("/calls", require("./calls"));
router.use("/groups", require("./groups"));

module.exports = router;
