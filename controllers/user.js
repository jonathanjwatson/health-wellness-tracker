const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = require("../models/user");



router.get("/", (req, res) => {
  User.find().then((user) => {
    res.json(user);
  });
});
router.put("/addNewServingConsumed/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    user.today[0].waterRatio[0].servingsConsumed +=1;
    res.json(user);
  })
})

router.post("/email/:email", (req, res) => {
  const userEmail = req.params.email;
  User.findOne({"email": userEmail}).then((user) => {
    res.json(user);
  })
})
router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  })
})




module.exports = router;