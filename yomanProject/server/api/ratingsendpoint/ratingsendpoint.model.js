'use strict';

import mongoose from 'mongoose';

var RatingsendpointSchema = new mongoose.Schema({
  Ratings:Number,
  Name:String
});

export default mongoose.model('Ratingsendpoint', RatingsendpointSchema);
