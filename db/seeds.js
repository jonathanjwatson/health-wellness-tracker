require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Food = require('../models/food');
var Water = require('../models/water');
var Day = require('../models/day');
var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

Food.remove({}, (err) => console.log(err));
Water.remove({}, (err) => console.log(err));
Day.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));

const waterOne = new Water({
    servingsConsumed: 5,
    servingsDesired:8
})
const waterTwo = new Water({
    servingsConsumed: 0,
    servingsDesired: 8
})
const waterThree = new Water({
    servingsConsumed: 5,
    servingsDesired: 10
})
const foodOne = new Food({
    name: 'Pizza',
    calories: 400
})
const foodTwo = new Food({
    name:'Garlic Knotts',
    calories: 100
})
const foodThree = new Food({
    name: 'Pecan Pie',
    calories: 250
})
const dayOne = new Day({
    date: new Date(),
    waterRatio: [waterOne],
    foodConsumed: [foodOne, foodTwo, foodThree]
})
const dayTwo = new Day({
    date: "2017-08-10T19:02:48.200Z",
    waterRatio: [waterTwo]
})
const userOne = new User({
    firstName: "Jonathan",
    lastName: "Watson",
    email: "jonathanwatson1@gmail.com",
    password: "monkey",
    weight: 250,
    today: [dayOne, dayTwo]
})
const userTwo = new User({
    firstName: "Susy",
    lastName: "Barnwell",
    email: "susy@gmail.com",
    password: "password1",
    weight: 95,
    today: [dayOne]
})
waterOne.save().then(() => console.log("Water One Saved!"));
waterTwo.save().then(() => console.log("WaterTwo Saved!"));
waterThree.save().then(() => console.log("Water Three Saved!"));
foodOne.save().then(() => console.log("Food One Saved"));
foodTwo.save().then(() => console.log("Food Two Saved"));
foodThree.save().then(() => console.log("Food Three Saved"));
dayOne.save().then(() => console.log("Day One Saved"));
dayTwo.save().then(() => console.log("Day Two Saved!"));
userOne.save().then(() => console.log("User One Saved!"));
userTwo.save().then(() => console.log("User Two saved!"));

mongoose.connection.close();