const mongoose = require("mongoose");

const articleScehma = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  markdown: { type: String},
  createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', articleScehma)