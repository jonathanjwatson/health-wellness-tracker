require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Water = require('../models/water');
var Day = require('../models/day');
var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

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
const dayOne = new Day({
    date: new Date(),
    waterRatio: [waterOne]
})
const userOne = new User({
    firstName: "Jonathan",
    lastName: "Watson",
    email: "jonathanwatson1@gmail.com",
    password: "monkey",
    weight: 250,
    today: [dayOne]
})
waterOne.save().then(() => console.log("Water One Saved!"));
waterTwo.save().then(() => console.log("WaterTwo Saved!"));
waterThree.save().then(() => console.log("Water Three Saved!"));
dayOne.save().then(() => console.log("Day One Saved"));
userOne.save().then(() => console.log("User One Saved!"));

mongoose.connection.close();