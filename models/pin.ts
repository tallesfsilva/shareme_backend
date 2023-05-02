 
import { Schema, model } from 'mongoose';

import {PinType, UserType, CommentsType, SaveType} from '../types/index' 



 
var PinSchema = new Schema<PinType>(
    {
      title: {type: String, required: true, minlength:5, maxlength: 100},
      about: {type: String, required: true, minlength:3, maxlength: 100},
      destination: {type: String, required: true, minlength:3, maxlength: 100},
      category: {type: String, required: true, minlength:3, maxlength: 100},
      image: {type: String, maxlength: 100},
      user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
      postedBy: {type: Schema.Types.ObjectId, ref: 'PostedBy', required: true},
      saved: [{type: Schema.Types.ObjectId, ref: 'Saved', required: false}],
      comments: [{type: Schema.Types.ObjectId, ref: 'Comments', required: false}],
      data_criacao :{type: Date, default: Date.now},   
    }
  );

  const PinModel = model<PinType>('Pin', PinSchema);

 

  class Pin{
   
    private pin:PinType;    
            


    constructor(pinObj:PinType){

      this.pin = {
        title: pinObj.title,
        about:  pinObj.about,
        destination:  pinObj.destination,
        image: pinObj.image,
        category:  pinObj.category,
        user:  pinObj.user,
        postedBy:  pinObj.postedBy
      }      
    }

      public static query = model<PinType>('Pin', PinSchema);

     

    // public static async getAllPins(){
    //   try {
    //       const pinObj = await PinModel.find();

    //       return pinObj;

      
    //   } catch (error) {
        
    //   }

    // }

    public async deletePin(pinId:string){
      try {
        
      } catch (error) {
        
      }
    }


    public async savePin(imageType:String){   

      try {       
 
        let pinObjModel = new PinModel(this.pin);    
        pinObjModel.image = process.env.URL_IMAGE+pinObjModel._id+'.'+imageType.split('/')[1];
     
 
        const res = await pinObjModel.save(); 
        return res;   
      } catch (error) {
          throw new Error(error)
      }
    }
  }

  // PinSchema
  // .virtual('url')
  // .get(function () {
  //   return '/pin/detail/' + this._id;
  // });
  
    
  module.exports = Pin;