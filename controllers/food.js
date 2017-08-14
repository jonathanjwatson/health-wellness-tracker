const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const Food = require("../models/food");
const User = require("../models/user");


router.get("/", (req, res) => {
  Food.find().then((food) => {
    res.json(food);
  });
});

router.post("/create", (req, res) => {
  const newFoodInfo = req.body.foodItem;
  console.log(newFoodInfo)
  const newFood = new Food(newFoodInfo);
  console.log(newFood);
  newFood.save()
  .then(() => {
    res.json(newFood);
  }
  ).catch(err => console.log(err))
})

router.post("/", (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  Food.findById(req.body.foodId)
  .then((food) => {
    res.json(food);

  })
})


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