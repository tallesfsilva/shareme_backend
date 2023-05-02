 
import { Schema, model } from 'mongoose';
import {UserType} from '../types/index'
 
 
var UserSchema = new Schema<UserType>(
    {
      name: {type: String, required: true, minlength:5, maxlength: 100},
      email: {type: String, required: true, minlength:3, maxlength: 100},
      idGoogle: {type: String, required: true, minlength:5, maxlength: 100},
      createdAt :{type: Date, defautl: Date.now}, 
      image:{type: String, maxlength:100}
     
 
    }
  );

const UserModel = model<UserType>('User', UserSchema);

class User{

    private user: UserType;
   
    

    constructor(userObj: UserType){

      this.user = {
        name : userObj.name,
        email : userObj.email,
        idGoogle : userObj.idGoogle,
        createdAt: new Date(),
        image: userObj.image
      
      }       
    }

    

     public async save(){
      try {
        const userExist = await User.getUser(this.user.idGoogle);

        if(userExist && typeof userExist=='object'){
       
           return {msg: "User Found:", user: userExist}
        }else{
          const userObjModel = new UserModel(this.user);
          const res = await userObjModel.save();      
          if(res){
            return res;
          }else{
            return null;
          }
        }   
      } catch (error) {
          throw new Error(error);
      }
    }

    static async getUser(userId: string){
      try {
        if(userId && typeof userId == 'string'){
          const foundUser = await UserModel.findOne({'idGoogle':userId})
          return foundUser ? foundUser : false;
      }
      } catch (error) {
          throw new Error(error);
      }
     
      
    }

}

module.exports = User;


  // UserSchema
  // .virtual('url')
  // .get(function () {
  //   return '/projeto/' + this._id;
  // });
  
    
  //Export model
 