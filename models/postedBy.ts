 
import { Schema, model } from 'mongoose';
import {PostedByType} from '../types/index'
 
 
var PostedBySchema = new Schema<PostedByType>(
    {
      user: {type: Schema.Types.ObjectId, ref: 'User', required: true},     
    }
  );


    
  //Export model
  module.exports = model<PostedByType>('PostedBy', PostedBySchema);