"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var Pin = require('../models/pin');
var PostedBy = require('../models/postedBy');
var User = require('../models/user');
var Save = require('../models/save');
var Comments = require('../models/comments');
var express = require('express');
var router = express.Router();
var helper = require('../utils/helpers');
router.post('/create', async function (req, res, next) {
    try {
        console.log(req.body);
        if (req && req.body && req.body.user && req.files, req.files.image) {
            const userGoogleId = req.body.user;
            const user = await User.getUser(userGoogleId);
            const postedBy = new PostedBy({
                user: user
            });
            postedBy.save();
            if (user) {
                var pinData = {
                    title: req.body.title,
                    about: req.body.about,
                    destination: req.body.destination,
                    image: '',
                    category: req.body.categoryOption,
                    user: user,
                    postedBy: postedBy
                };
                try {
                    const pinImageObj = req.files.image ? req.files.image : /*API ERROR HELPER*/ new Error("500");
                    const pinObj = pinData ? new Pin(pinData) : /*API ERROR HELPER*/ new Error("500");
                    const pinRes = pinImageObj && pinData ? await pinObj.savePin(pinImageObj.mimetype) : /*API ERROR HELPER*/ new Error("500");
                    if (pinRes && pinRes._id) {
                        const resUpload = pinImageObj ? helper.uploadPinImage(pinImageObj, pinRes._id) : /*API ERROR HELPER*/ new Error("500");
                        res.sendStatus(200);
                    }
                    else {
                        throw new Error("500");
                    }
                }
                catch (error) {
                    throw new Error(error);
                }
            }
            else {
                res.json({ msg: 'failed' });
                res.status(404);
            }
        }
        else {
            res.json({ msg: 'failed' })
                .status(200);
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
router.post('/delete/:id', async function (req, res) {
    try {
        console.log(req.params);
        if (req.params && req.params.id) {
            const pinId = req.params.id;
            const resPinDelete = await Pin.query.deleteOne({ _id: pinId }).catch((err) => { console.log(err); });
            res.json({ msg: 'success' })
                .status(200);
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
router.get('/more', async (req, res) => {
    try {
        // const{pinId} = req.query;
        // const pinsObj = await Pin.query.find.where('_id', {$ne: pinId})
        // console.log(pinsObj)
    }
    catch (error) {
        throw new Error(error);
    }
});
router.post('/comment', async function (req, res) {
    try {
        if (req.body && req.body.pinId && req.body.postedBy && req.body.comment) {
            const commentObj = new Comments({
                postedBy: req.body.postedBy,
                comment: req.body.comment
            });
            commentObj.save();
            const pinObj = await Pin.query.find({ _id: req.body.pinId }).catch((err) => { console.log(err); });
            pinObj[0].comments.push(commentObj);
            const resUpdate = await pinObj[0].save().catch((errr) => console.log(errr));
            res.json({ msg: 'success' })
                .status(200);
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
router.post('/save', async function (req, res) {
    try {
        if (req.body && req.body.pinId && req.body.postedBy && req.body.userId) {
            const saveObj = new Save({
                postedBy: req.body.postedBy,
                userId: req.body.userId
            });
            saveObj.save();
            const pinObj = await Pin.query.find({ _id: req.body.pinId }).catch((err) => { console.log(err); });
            pinObj[0].saved.push(saveObj);
            const resUpdate = await pinObj[0].save().catch((errr) => console.log(errr));
            res.json({ msg: 'success' })
                .status(200);
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
router.get('/', async function (req, res) {
    try {
        const pinObj = await Pin.query.find().populate({ path: 'postedBy', populate: { path: 'user' } }).populate('user').catch((err) => { console.log(err); });
        console.log(pinObj);
        res.json({ success: true, pins: pinObj })
            .status(200);
    }
    catch (error) {
        throw new Error(error);
    }
});
router.get('/detail/:id', async function (req, res) {
    try {
        if (req.params && req.params.id) {
            const pinId = req.params.id;
            const pinObj = await Pin.query.findOne({ _id: pinId }).populate({ path: 'postedBy', populate: { path: 'user' } }).populate('user')
                .populate({ path: 'comments', populate: { path: "postedBy", populate: { path: 'user' } } }).populate({ path: 'saved', populate: { path: 'postedBy' } })
                .catch(err => console.log(err));
            if (pinObj) {
                res.json({ pin: pinObj })
                    .status(200);
            }
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
module.exports = router;
