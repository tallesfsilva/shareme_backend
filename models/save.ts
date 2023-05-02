 
import { Schema, model } from 'mongoose';
import {SaveType} from '../types/index'
 
 
var SavedSchema = new Schema<SaveType>(
    {
      postedBy: {type: Schema.Types.ObjectId, ref: 'PostedBy', required: true},
      userId: {type: String, maxlength: 100},
     
    }
  );


  
    
  //Export model
  module.exports = model<SaveType>('Saved', SavedSchema);