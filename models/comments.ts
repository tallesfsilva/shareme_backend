 
import { Schema, model } from 'mongoose';
import {CommentsType} from '../types/index'
 
 
var CommentsSchema = new Schema<CommentsType>(
    {
      postedBy: {type: Schema.Types.ObjectId, ref: 'PostedBy', required: true},
      comment: {type: String, required: true, minlength:3, maxlength: 100},
     
    }
  );


    
  //Export model
  module.exports = model<CommentsType>('Comments', CommentsSchema);