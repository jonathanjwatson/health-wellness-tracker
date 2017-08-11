
const mongoose = require('mongoose');

const waterSchema = mongoose.Schema({
  servingsConsumed: Number,
  servingsDesired: Number,
});

const daySchema = mongoose.Schema({
  date: Date,
  waterRatio: [waterSchema]
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


const Water = mongoose.model('Water', waterSchema);
const Day = mongoose.model('Day', daySchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Water, Day, User
}