'use strict';

import mongoose from 'mongoose';

var MoviemappingendpointSchema = new mongoose.Schema({
  Title: String,
  City: String,
  Place:String,
  TheatreName:String,
  ShowDate:String,
  ShowTime:Array
});

export default mongoose.model('Moviemappingendpoint', MoviemappingendpointSchema);
