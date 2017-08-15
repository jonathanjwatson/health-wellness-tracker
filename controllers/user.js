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
    return user.save();
  })
})

router.post("/email/:email", (req, res) => {
  const userEmail = req.params.email;
  User.findOne({"email": userEmail}).then((user) => {
    res.json(user);
  })
})

// ============================================== //
//          DELETE FOOD FROM USER                 //
// ============================================== //
router.delete('/:userId/food/:foodId', (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {
    const myFoodConsumed = user.today[0].foodConsumed
    const newFood = user.today[0].foodConsumed.filter((food) => {
      return food.id !== req.params.foodId
    })
    user.today[0].foodConsumed = newFood
    user.save()
    res.json(user)
})
})


router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  })
})




module.exports = router;