"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPinImage = exports.validateFileTypePinImagge = void 0;
var fs = require('fs');
var path = require('path');
const validateFileTypePinImagge = (pinImageType) => {
    if (pinImageType === 'image/png' || pinImageType === 'image/svg'
        || pinImageType === 'image/jpeg' || pinImageType === 'image/jpg'
        || pinImageType === 'image/gif' || pinImageType === 'image/tiff') {
        return true;
    }
    return false;
};
exports.validateFileTypePinImagge = validateFileTypePinImagge;
const uploadPinImage = (objPinImage, pinId) => {
    if (objPinImage && pinId) {
        const validateTypeImage = objPinImage ? (0, exports.validateFileTypePinImagge)(objPinImage.mimetype) : null;
        if (validateTypeImage) {
            //fs.mkdirSync('images/' + pinId , { recursive: true });
            fs.writeFileSync('images/' + pinId + '.' + objPinImage.mimetype.split('/')[1], objPinImage.data);
            return true;
        }
    }
    return false;
};
exports.uploadPinImage = uploadPinImage;
