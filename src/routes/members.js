const express = require("express");
const router = express.Router();

let members = [];

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/post", (req, res) => {
  members.push({ id: members.length + 1, name: "Will" });
  res.json({ res: "added" });
});

module.exports = router;
