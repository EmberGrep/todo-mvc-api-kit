'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  isComplete: { type: Boolean },
  title: { type: String },
};

var TodoSchema = new Schema(fields);



module.exports = mongoose.model('Todo', TodoSchema);
