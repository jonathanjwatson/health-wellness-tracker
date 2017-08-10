const mongoose = require('mongoose');

const waterSchema = mongoose.Schema({
  value: Number,
  question: String,
  answer: String
});

const categorySchema = mongoose.Schema({
  name: String,
  questions: [questionSchema],
});

const gameSchema = mongoose.Schema({
  user: String,
  points: Number,
  board: [Boolean],
  categories: [categorySchema],
});

gameSchema.pre('save', function(next){
  const emptyBoard = [
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false, 
    false, false, false, false, false, false
  ];
  this.board = emptyBoard;
  next();
})
const Question = mongoose.model('Question', questionSchema);
const Category = mongoose.model('Category', categorySchema);
const Game = mongoose.model('Game', gameSchema);

module.exports = {
  Question, Category, Game
}