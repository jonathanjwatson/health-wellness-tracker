
const mongoose = require('mongoose');

const waterSchema = mongoose.Schema({
  servingsConsumed: Number,
  servingsDesired: Number,
});

const foodSchema = mongoose.Schema({
  name: String,
  calories: Number
})

const daySchema = mongoose.Schema({
  date: Date,
  waterRatio: [waterSchema],
  foodConsumed: [foodSchema]
});

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  weight: Number,
  today: [daySchema]
});



// daySchema.pre('save', function(next){
//     now = new Date();
//     this.date = now;
//     next();
// })

const Food = mongoose.model('Food', foodSchema);
const Water = mongoose.model('Water', waterSchema);
const Day = mongoose.model('Day', daySchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Food, Water, Day, User
}