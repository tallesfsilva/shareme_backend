"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var PinSchema = new mongoose_1.Schema({
    title: { type: String, required: true, minlength: 5, maxlength: 100 },
    about: { type: String, required: true, minlength: 3, maxlength: 100 },
    destination: { type: String, required: true, minlength: 3, maxlength: 100 },
    category: { type: String, required: true, minlength: 3, maxlength: 100 },
    image: { type: String, maxlength: 100 },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'PostedBy', required: true },
    saved: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Saved', required: false }],
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Comments', required: false }],
    data_criacao: { type: Date, default: Date.now },
});
const PinModel = (0, mongoose_1.model)('Pin', PinSchema);
class Pin {
    constructor(pinObj) {
        this.pin = {
            title: pinObj.title,
            about: pinObj.about,
            destination: pinObj.destination,
            image: pinObj.image,
            category: pinObj.category,
            user: pinObj.user,
            postedBy: pinObj.postedBy
        };
    }
    // public static async getAllPins(){
    //   try {
    //       const pinObj = await PinModel.find();
    //       return pinObj;
    //   } catch (error) {
    //   }
    // }
    async deletePin(pinId) {
        try {
        }
        catch (error) {
        }
    }
    async savePin(imageType) {
        try {
            let pinObjModel = new PinModel(this.pin);
            pinObjModel.image = process.env.URL_IMAGE + pinObjModel._id + '.' + imageType.split('/')[1];
            const res = await pinObjModel.save();
            return res;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
Pin.query = (0, mongoose_1.model)('Pin', PinSchema);
// PinSchema
// .virtual('url')
// .get(function () {
//   return '/pin/detail/' + this._id;
// });
module.exports = Pin;
