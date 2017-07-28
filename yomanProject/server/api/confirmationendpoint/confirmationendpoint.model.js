'use strict';

import mongoose from 'mongoose';

var ConfirmationendpointSchema = new mongoose.Schema({
  Title: String,
  movclass: String,
  movseat: Array,
  movamount: Number,
  City: String,
  Place:String,
  TheatreName:String,
  ShowDate:String,
  ShowTime:Array
});

export default mongoose.model('Confirmationendpoint', ConfirmationendpointSchema);
