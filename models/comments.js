"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var CommentsSchema = new mongoose_1.Schema({
    postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'PostedBy', required: true },
    comment: { type: String, required: true, minlength: 3, maxlength: 100 },
});
//Export model
module.exports = (0, mongoose_1.model)('Comments', CommentsSchema);
