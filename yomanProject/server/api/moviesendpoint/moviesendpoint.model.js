'use strict';

import mongoose from 'mongoose';

var MoviesendpointSchema = new mongoose.Schema({
  Image:String,
  Title:String,
  Year:Number,
  Cast:String,
  Duration:String,
  Genre:String,
  Rate:Number,
  Plot:String,
  Status:String
});

export default mongoose.model('Moviesendpoint', MoviesendpointSchema);
