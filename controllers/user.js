const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  User.find().then((user) => {
    res.json(user);
  });
});

router.get("/email/:email", (req, res) => {
  const userEmail = req.body.e
  User.findOne({"email": userEmail})
})
router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(game);
  })
})



module.exports = router;