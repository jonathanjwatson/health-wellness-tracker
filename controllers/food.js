const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const Food = require("../models/food");



router.get("/", (req, res) => {
  Food.find().then((food) => {
    res.json(food);
  });
});

// router.put("/addNewServingConsumed/:id", (req, res) => {
//   User.findById(req.params.id).then((user) => {
//     user.today[0].waterRatio[0].servingsConsumed +=1;
//     return user.save();
//   })
// })

// router.post("/email/:email", (req, res) => {
//   const userEmail = req.params.email;
//   User.findOne({"email": userEmail}).then((user) => {
//     res.json(user);
//   })
// })
// router.get("/:id", (req, res) => {
//   User.findById(req.params.id).then((user) => {
//     res.json(user);
//   })
// })




module.exports = router;