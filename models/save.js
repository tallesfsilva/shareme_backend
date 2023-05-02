"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var SavedSchema = new mongoose_1.Schema({
    postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'PostedBy', required: true },
    userId: { type: String, maxlength: 100 },
});
//Export model
module.exports = (0, mongoose_1.model)('Saved', SavedSchema);
